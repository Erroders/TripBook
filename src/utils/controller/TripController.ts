// Imports
import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { TRIP_DATA, POST } from '../../models/TripData';
import firebase, { firestore, storage } from '../firebase/firebase';
import { getPosts } from './PostController';
import { getUser } from './UserController';
import { USER_FOLLOW } from '../../models/UserData';
// -----------------------------------------------------------------------------

class Trip implements TRIP_DATA {
    // Fields
    id: string;
    coverImage: string;
    title: string;
    noOfPosts: number;
    username: string;
    userProfilePhotoUrl: string;
    details: string;
    lastUpdated: Date;
    posts: Array<POST>;

    // constructor
    constructor(
        id: string,
        coverImage: string,
        title: string,
        noOfPosts: number,
        username: string,
        userProfilePhotoUrl: string,
        details: string,
        lastUpdated: Date,
        posts: Array<POST>,
    ) {
        this.id = id;
        this.coverImage = coverImage;
        this.title = title;
        this.noOfPosts = noOfPosts;
        this.username = username;
        this.userProfilePhotoUrl = userProfilePhotoUrl;
        this.details = details;
        this.lastUpdated = lastUpdated;
        this.posts = posts;
    }
}
// -----------------------------------------------------------------------------

// Firestore TripConverter
const tripConverter = {
    toFireStore: function (trip: TRIP_DATA) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { posts, ...tripData } = trip;
        return { ...tripData, lastUpdated: firebase.firestore.FieldValue.serverTimestamp() };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromFirestore: function (tripData: any | TRIP_DATA, posts: Array<POST>) {
        return new Trip(
            tripData.id,
            tripData.coverImage,
            tripData.title,
            tripData.noOfPosts,
            tripData.username,
            tripData.userProfilePhotoUrl,
            tripData.details,
            new Date(tripData.lastUpdated.seconds * 1000),
            posts,
        );
    },
};
// -----------------------------------------------------------------------------

// Create trip for a user
export async function createTrip(username: string, trip: TRIP_DATA): Promise<boolean> {
    return await FIREBASE_UTILS.addDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
        tripConverter.toFireStore(trip),
    )
        .then(async (createdTripId) => {
            return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
                id: username,
                noOfTrips: firebase.firestore.FieldValue.increment(1),
                currentTrip: createdTripId,
            }).then(() => {
                return true;
            });
        })
        .catch((error) => {
            console.error('Error while creating trip', error);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Get trip data of a user
export async function getTrip(username: string, tripId: string): Promise<TRIP_DATA | null> {
    let tripData: Trip;
    return await FIREBASE_UTILS.getDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
        tripId,
    ).then((tripDoc) => {
        if (tripDoc) {
            const postData = getPosts(
                firestore
                    .collection(FIREBASE_UTILS.Collection.USERS)
                    .doc(username)
                    .collection(FIREBASE_UTILS.Collection.TRIPS)
                    .doc(tripId),
            );

            return postData.then((posts) => {
                tripData = tripConverter.fromFirestore(tripDoc, posts);
                return tripData;
            });
        } else {
            return null;
        }
    });
}
// -----------------------------------------------------------------------------

// Delete a trip
export async function deleteTrip(username: string, tripId: string): Promise<boolean> {
    return await FIREBASE_UTILS.deleteDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
        tripId,
    )
        .then(async () => {
            return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
                id: username,
                noOfTrips: firebase.firestore.FieldValue.increment(-1),
            }).then(() => {
                return true;
            });
        })
        .catch((error) => {
            console.error('Error while deleting trip', error);
            return false;
        });
}
// -----------------------------------------------------------------------------

// Get all trips of a user
export async function getAllTrips(username: string): Promise<Trip[] | null> {
    const trips: Trip[] = [];
    return await FIREBASE_UTILS.getAllDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
    ).then((tripDocs) => {
        if (tripDocs.length !== 0) {
            tripDocs.forEach((tripDoc) => {
                trips.push(tripConverter.fromFirestore({ id: tripDoc.id, ...tripDoc.data() }, []));
            });
            return trips;
        } else {
            return null;
        }
    });
}
// -----------------------------------------------------------------------------

// Upload trip coverImage
export async function uploadTripCoverImage(
    username: string,
    tripId: string,
    fileName: string,
    file: File | null | undefined,
): Promise<string> {
    return await FIREBASE_UTILS.uploadFile(storage.ref(`${username}/${tripId}/${fileName}`), file as Blob).then(
        (downloadUrl) => {
            return downloadUrl;
        },
    );
}
// -----------------------------------------------------------------------------

// Set currentTrip
export async function setCurrentTrip(username: string, tripId: string): Promise<boolean> {
    return await FIREBASE_UTILS.updateDocument(firestore.collection(FIREBASE_UTILS.Collection.USERS), {
        id: username,
        currentTrip: tripId,
    })
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
}

// Get currentTrip
export async function getCurrentTrip(username: string): Promise<string | undefined> {
    return await getUser(username).then((user) => {
        if (user) {
            return user.currentTrip;
        }
    });
}

// Get HomeFeeds
export async function getHomeFeeds(followings: USER_FOLLOW) {
    let feeds: TRIP_DATA[] = [];
    const tripCollectionGroupRef = firestore.collectionGroup(FIREBASE_UTILS.Collection.TRIPS);
    if (Object.keys(followings).length !== 0) {
        for (const following of Object.keys(followings)) {
            await tripCollectionGroupRef
                .where('username', '==', following)
                .orderBy('lastUpdated', 'desc')
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        feeds.push(tripConverter.fromFirestore({ id: doc.id, ...doc.data() }, []));
                    });
                });
        }

        feeds = feeds.sort((a, b) => {
            if (a.lastUpdated < b.lastUpdated) {
                return 1;
            }
            if (a.lastUpdated > b.lastUpdated) {
                return -1;
            }
            return 0;
        });
    } else {
        console.log('no followings');
    }
    return feeds;
}
