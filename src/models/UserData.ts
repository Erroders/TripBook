export interface USER_FOLLOW {
    username: string;
    userProfilePhotoUrl: string;
}

export interface USER_DATA {
    username: string;
    firstName: string;
    lastName: string;
    bio: string;
    email: string;
    userProfilePhotoUrl: string;
    followers: Array<USER_FOLLOW>;
    followings: Array<USER_FOLLOW>;
    noOfTrips: number;
    currentTrip: string;
}
