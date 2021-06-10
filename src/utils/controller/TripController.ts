// Imports
import * as FIREBASE_UTILS from '../firebase/firebaseUtils';
import { TRIP_DATA, POST } from '../../models/TripData';
import { firestore } from '../firebase/firebase';
import { getPosts } from './PostController';
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
        return tripData;
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
            tripData.lastUpdated,
            posts,
        );
    },
};
// -----------------------------------------------------------------------------

// Create trip for a user
export function createTrip(username: string, trip: TRIP_DATA): void {
    FIREBASE_UTILS.addDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
        trip,
    );
}
// -----------------------------------------------------------------------------

// Get trip data of a user
export function getTrip(username: string, tripId: string): TRIP_DATA | null {
    let tripData = null;
    FIREBASE_UTILS.getDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
        tripId,
    ).then((data) => {
        if (data) {
            const posts = getPosts(
                firestore
                    .collection(FIREBASE_UTILS.Collection.USERS)
                    .doc(username)
                    .collection(FIREBASE_UTILS.Collection.TRIPS)
                    .doc(tripId),
            );
            tripData = tripConverter.fromFirestore(data, posts);
        }
    });
    return tripData;
}
// -----------------------------------------------------------------------------

// Delete a trip
export function deleteTrip(username: string, tripId: string): void {
    FIREBASE_UTILS.deleteDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
        tripId,
    );
}
// -----------------------------------------------------------------------------

// Get all trips of a user
export function getAllTrips(username: string): Trip[] | null {
    const trips: Trip[] = [];
    FIREBASE_UTILS.getAllDocument(
        firestore.collection(FIREBASE_UTILS.Collection.USERS).doc(username).collection(FIREBASE_UTILS.Collection.TRIPS),
    ).then((tripDocs) => {
        if (tripDocs.size !== 0) {
            tripDocs.forEach((tripDoc) => {
                const posts = getPosts(
                    firestore
                        .collection(FIREBASE_UTILS.Collection.USERS)
                        .doc(username)
                        .collection(FIREBASE_UTILS.Collection.TRIPS)
                        .doc(tripDoc.id),
                );
                trips.push(tripConverter.fromFirestore(tripDoc, posts));
            });
            return trips;
        }
    });
    return null;
}
// -----------------------------------------------------------------------------
