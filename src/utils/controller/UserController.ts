// Imports
import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { USER_DATA, USER_FOLLOW } from '../../models/UserData';
import firebase, { firestore } from '../firebase/firebase';
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
    console.log(followersData.length);

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
