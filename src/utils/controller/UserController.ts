// Imports
import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { USER_DATA, USER_FOLLOW } from '../../models/UserData';
import firebase, { firestore, storage } from '../firebase/firebase';
import _ from 'lodash';
// -----------------------------------------------------------------------------

// User class
export class User implements USER_DATA {
    // fields
    username: string;
    firstName: string;
    lastName: string;
    bio: string;
    email: string;
    userProfilePhotoUrl: string;
    followers: USER_FOLLOW;
    followings: USER_FOLLOW;
    noOfTrips: number;
    currentTrip: string;

    // constructor
    constructor(
        username: string,
        firstName: string,
        lastName: string,
        bio: string,
        email: string,
        userProfilePhotoUrl: string,
        followers: USER_FOLLOW,
        followings: USER_FOLLOW,
        noOfTrips: number,
        currentTrip: string,
    ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.email = email;
        this.userProfilePhotoUrl = userProfilePhotoUrl;
        this.followers = followers;
        this.followings = followings;
        this.noOfTrips = noOfTrips;
        this.currentTrip = currentTrip;
    }
}
// -----------------------------------------------------------------------------

// Firestore UserConverter
export const userConverter = {
    toFirestore: function (user: USER_DATA) {
        const { username, ...userData } = user;
        return { id: username, ...userData };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromFirestore: function (userData: any): User {
        return new User(
            userData.id,
            userData.firstName,
            userData.lastName,
            userData.bio,
            userData.email,
            userData.userProfilePhotoUrl,
            userData.followers,
            userData.followings,
            userData.noOfTrips,
            userData.currentTrip,
        );
    },
};
// -----------------------------------------------------------------------------

// Get user data
export async function getUser(username: string): Promise<USER_DATA | null> {
    return await FIREBASE_UTILS.getDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), username).then(
        (userDoc) => {
            if (userDoc) {
                return userConverter.fromFirestore(userDoc);
            } else {
                return null;
            }
        },
    );
}
// -----------------------------------------------------------------------------

// Get all followers
export async function getFollowers(followers: USER_FOLLOW): Promise<User[]> {
    const followersData: User[] = [];
    await Promise.all(
        Object.keys(followers).map(async (follower) => {
            await getUser(follower).then((userData) => {
                userData && followersData.push(userData);
            });
        }),
    );

    return followersData;
}
// -----------------------------------------------------------------------------

// Get all followings
export async function getFollowings(followings: USER_FOLLOW): Promise<User[]> {
    const followingsData: User[] = [];
    await Promise.all(
        Object.keys(followings).map(async (following) => {
            await getUser(following).then((userData) => {
                userData && followingsData.push(userData);
            });
        }),
    );
    return followingsData;
}
// -----------------------------------------------------------------------------

// Follow user
export async function userFollow(userFollowing: string, userToFollow: string): Promise<boolean> {
    return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
        id: userFollowing,
        [`followings.${userToFollow}`]: `/${FIREBASE_UTILS.Collection.USERS}/${userToFollow}`,
    })
        .then(async () => {
            console.log(`${userFollowing} now follows ${userToFollow}!!`);
            return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
                id: userToFollow,
                [`followers.${userFollowing}`]: `/${FIREBASE_UTILS.Collection.USERS}/${userFollowing}`,
            }).then(() => {
                console.log(`${userToFollow} is now followed by ${userFollowing}!!`);
                return true;
            });
        })
        .catch(() => {
            console.error(`${userFollowing} unable to follow ${userToFollow}!!`);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Unfollow user
export async function userUnfollow(userUnfollowing: string, userToUnfollow: string): Promise<boolean> {
    return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
        id: userUnfollowing,
        [`followings.${userToUnfollow}`]: firebase.firestore.FieldValue.delete(),
    })
        .then(async () => {
            console.log(`${userUnfollowing} unfollowed ${userToUnfollow}!!`);
            return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
                id: userToUnfollow,
                [`followers.${userUnfollowing}`]: firebase.firestore.FieldValue.delete(),
            }).then(() => {
                console.log(`${userToUnfollow} is now unfollowed by ${userUnfollowing}!!`);
                return true;
            });
        })
        .catch(() => {
            console.error(`${userUnfollowing} unable to unfollow ${userToUnfollow}!!`);
            return false;
        });
}
// -----------------------------------------------------------------------------

export async function createUser(userData: USER_DATA): Promise<boolean> {
    return await FIREBASE_UTILS.addDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS),
        userConverter.toFirestore(userData),
    )
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Get userData by email
export function getUserByEmail(
    email: string,
    cb: (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => void,
) {
    firestore.collection(FIREBASE_UTILS.Collection.USERS).where('email', '==', email).onSnapshot(cb);
}
// -----------------------------------------------------------------------------

// Upload user profile image
export async function uploadUserProfileImage(
    username: string,
    fileName: string,
    file: File | null | undefined,
): Promise<string> {
    return await FIREBASE_UTILS.uploadFile(storage.ref(`${username}/${fileName}`), file as Blob).then((downloadUrl) => {
        return downloadUrl;
    });
}
// -----------------------------------------------------------------------------

// Udate user data
export async function updateUser(
    username: string,
    updatedUserData: { bio: string; firstName: string; lastName: string; userProfilePhotoUrl: string },
): Promise<boolean> {
    return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
        id: username,
        ...updatedUserData,
    })
        .then(() => {
            if (updatedUserData.userProfilePhotoUrl) {
                firestore
                    .collection(FIREBASE_UTILS.Collection.USERS)
                    .doc(username)
                    .collection(FIREBASE_UTILS.Collection.TRIPS)
                    .get()
                    .then((snapshot) => {
                        if (!snapshot.empty) {
                            snapshot.forEach((tripDoc) => {
                                tripDoc.ref.update({ userProfilePhotoUrl: updatedUserData.userProfilePhotoUrl });
                            });
                        }
                    });
            }
            return true;
        })
        .catch((error) => {
            console.error('Error while updating post', error);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Search user by name
export async function getUsersByName(nameToSearch: string): Promise<User[]> {
    let userCollectionGroupRef = firestore.collectionGroup(FIREBASE_UTILS.Collection.USERS);
    const usersFound: User[] = [];

    let [fName, lName] = nameToSearch.split(' ');
    fName = _.capitalize(fName);
    lName = _.capitalize(lName);
    if (fName) {
        userCollectionGroupRef = userCollectionGroupRef.where('firstName', '==', fName);
    }
    if (lName) {
        userCollectionGroupRef = userCollectionGroupRef.where('lastName', '==', lName);
    }
    await userCollectionGroupRef.get().then((snapshot) => {
        if (!snapshot.empty) {
            snapshot.forEach((userDoc) => {
                usersFound.push(userConverter.fromFirestore({ id: userDoc.id, ...userDoc.data() }));
            });
        }
    });

    return usersFound;
}
// -----------------------------------------------------------------------------

// Search by username
export async function getUserByUsername(username: string): Promise<User | null> {
    return await firestore
        .collection(FIREBASE_UTILS.Collection.USERS)
        .doc(username)
        .get()
        .then((doc) => {
            if (doc.exists) {
                return userConverter.fromFirestore({ id: doc.id, ...doc.data() });
            } else {
                return null;
            }
        });
}
// -----------------------------------------------------------------------------
