// Imports
import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { POST } from '../../models/TripData';
import firebase, { firestore, storage } from '../firebase/firebase';
// -----------------------------------------------------------------------------

// Post class
class Post implements POST {
    // Fields
    id: string;
    index: number;
    title: string;
    caption: string;
    postsUrl: Array<string>;

    // constructor
    constructor(id: string, index: number, title: string, caption: string, postsUrl: Array<string>) {
        this.id = id;
        this.index = index;
        this.title = title;
        this.caption = caption;
        this.postsUrl = postsUrl;
    }
}
// -----------------------------------------------------------------------------

// Firestore PostConverter
const postConverter = {
    toFireStore: function (post: POST & { id?: string }) {
        return post;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromFirestore: function (postData: any) {
        return new Post(postData.id, postData.index, postData.title, postData.caption, postData.postsUrl);
    },
};
// -----------------------------------------------------------------------------

// Create post in a trip
export async function createPost(username: string, tripId: string, post: POST & { id?: string }): Promise<boolean> {
    return await FIREBASE_UTILS.addDocument(
        firestore
            .collection(FIREBASE_UTILS.Collection.USERS)
            .doc(username)
            .collection(FIREBASE_UTILS.Collection.TRIPS)
            .doc(tripId)
            .collection(FIREBASE_UTILS.Collection.POSTS),
        postConverter.toFireStore(post),
    )
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error('Error while creating post', error);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Get all posts of a trip
export async function getPosts(
    tripRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>,
): Promise<Array<POST>> {
    const posts: POST[] = [];
    return await FIREBASE_UTILS.getAllDocument(tripRef.collection(FIREBASE_UTILS.Collection.POSTS)).then((postDocs) => {
        postDocs.forEach((post) => {
            posts.push(postConverter.fromFirestore({ id: post.id, ...post.data() }));
        });
        return posts;
    });
}
// -----------------------------------------------------------------------------

//Delete post in a trip
export async function deletePost(username: string, tripId: string, postId: string): Promise<boolean> {
    return await FIREBASE_UTILS.deleteDocument(
        firestore
            .collection(FIREBASE_UTILS.Collection.USERS)
            .doc(username)
            .collection(FIREBASE_UTILS.Collection.TRIPS)
            .doc(tripId)
            .collection(FIREBASE_UTILS.Collection.POSTS),
        postId,
    )
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error('Error while deleting post', error);
            return false;
        });
}

// -----------------------------------------------------------------------------

// Update post
export async function updatePost(
    username: string,
    tripId: string,
    updatedPost: POST & { id: string },
): Promise<boolean> {
    return await FIREBASE_UTILS.updateDocument(
        firestore
            .collection(FIREBASE_UTILS.Collection.USERS)
            .doc(username)
            .collection(FIREBASE_UTILS.Collection.TRIPS)
            .doc(tripId)
            .collection(FIREBASE_UTILS.Collection.POSTS),
        updatedPost,
    )
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error('Error while updating post', error);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Upload postImage
export async function uploadPostImage(
    username: string,
    tripId: string,
    postId: string,
    fileName: string,
    file: Blob | Uint8Array | ArrayBuffer,
): Promise<string> {
    return await FIREBASE_UTILS.uploadFile(storage.ref(`${username}/${tripId}/${postId}/${fileName}`), file).then(
        (downloadUrl) => {
            return downloadUrl;
        },
    );
}
// -----------------------------------------------------------------------------
