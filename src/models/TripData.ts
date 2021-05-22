export interface POST {
    index: number;
    title: string;
    caption: string;
    postsUrl: Array<string>;
}

export interface TRIP_DATA {
    id?: string;
    coverImage: string;
    title: string;
    noOfPosts: number;
    username: string;
    userProfilePhotoUrl: string;
    details: string;
    lastUpdated: Date;
    posts: Array<POST>;
}
