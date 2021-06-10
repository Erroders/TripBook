// Imports
import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { POST } from '../../models/TripData';
import firebase, { firestore } from '../firebase/firebase';
// -----------------------------------------------------------------------------

// Post class
class Post implements POST {
    // Fields
    index: number;
    title: string;
    caption: string;
    postsUrl: Array<string>;

    // constructor
    constructor(index: number, title: string, caption: string, postsUrl: Array<string>) {
        this.index = index;
        this.title = title;
        this.caption = caption;
        this.postsUrl = postsUrl;
    }
}
// -----------------------------------------------------------------------------

// Firestore PostConverter
const postConverter = {
    toFireStore: function (post: POST) {
        return post;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromFirestore: function (postData: any) {
        return new Post(postData.index, postData.title, postData.caption, postData.postsUrl);
    },
};
// -----------------------------------------------------------------------------

// Create post in a trip
export function createPost(username: string, tripId: string, post: POST & { id?: string }): void {
    FIREBASE_UTILS.addDocument(
        firestore
            .collection(FIREBASE_UTILS.Collection.USERS)
            .doc(username)
            .collection(FIREBASE_UTILS.Collection.TRIPS)
            .doc(tripId)
            .collection(FIREBASE_UTILS.Collection.POSTS),
        post,
    );
}
// -----------------------------------------------------------------------------

// Get all posts of a trip
export function getPosts(tripRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>): Array<POST> {
    const posts: POST[] = [];
    FIREBASE_UTILS.getAllDocument(tripRef.collection(FIREBASE_UTILS.Collection.POSTS)).then((postDocs) => {
        postDocs.forEach((post) => {
            posts.push(postConverter.fromFirestore(post));
        });
    });
    return posts;
}
// -----------------------------------------------------------------------------

//Delete post in a trip
export function deletePost(username: string, tripId: string, postId: string): void {
    FIREBASE_UTILS.deleteDocument(
        firestore
            .collection(FIREBASE_UTILS.Collection.USERS)
            .doc(username)
            .collection(FIREBASE_UTILS.Collection.TRIPS)
            .doc(tripId)
            .collection(FIREBASE_UTILS.Collection.POSTS),
        postId,
    );
}
// -----------------------------------------------------------------------------

// Update post
export function updatePost(username: string, tripId: string, updatedPost: POST & { id: string }): void {
    FIREBASE_UTILS.updateDocument(
        firestore
            .collection(FIREBASE_UTILS.Collection.USERS)
            .doc(username)
            .collection(FIREBASE_UTILS.Collection.TRIPS)
            .doc(tripId)
            .collection(FIREBASE_UTILS.Collection.POSTS),
        updatedPost,
    );
}
// -----------------------------------------------------------------------------
