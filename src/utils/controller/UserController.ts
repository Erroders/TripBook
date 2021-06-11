import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { USER_DATA, USER_FOLLOW } from '../../models/UserData';
import { firestore } from '../firebase/firebase';

// User class
class User implements USER_DATA {
    // fields
    username: string;
    firstName: string;
    lastName: string;
    bio: string;
    email: string;
    userProfilePhotoUrl: string;
    followers: Array<USER_FOLLOW>;
    followings: Array<USER_FOLLOW>;
    noOfTrips: number;

    // constructor
    constructor(
        username: string,
        firstName: string,
        lastName: string,
        bio: string,
        email: string,
        userProfilePhotoUrl: string,
        followers: Array<USER_FOLLOW>,
        followings: Array<USER_FOLLOW>,
        noOfTrips: number,
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
    }
}

// Firestore UserConverter
const userConverter = {
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
        );
    },
};

// Get user data
export function getUser(username: string): USER_DATA | null {
    FIREBASE_UTILS.getDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), username).then((userDoc) => {
        return userConverter.fromFirestore(userDoc);
    });
    return null;
}
