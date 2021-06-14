export interface USER_DATA {
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
}

export interface USER_FOLLOW {
    [username: string]: string;
}
