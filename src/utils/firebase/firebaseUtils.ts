// Imports
import firebase from './firebase';
// -----------------------------------------------------------------------------

// Enum Collection
export enum Collection {
    USERS = 'USERS',
    TRIPS = 'TRIPS',
    POSTS = 'POSTS',
}
// -----------------------------------------------------------------------------

/** Adds document to the given collection reference.
 If 'id' is not provided in the data object (second parameter) firestore aotomatically generates it.*/
export function addDocument<Document extends { id?: string }>(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    { id, ...data }: Document,
    merge = true,
): void {
    if (id) {
        collectionRef
            .doc(id)
            .set(data, { merge: merge })
            .then(() => {
                console.log('Document successfully written!');
            })
            .catch((error) => {
                console.error('Error writing document: ', error);
            });
    } else {
        collectionRef
            .add(data)
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    }
}
// -----------------------------------------------------------------------------

/** Deletes document in the provided collection reference with the given document id.*/
export function deleteDocument(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    id: string,
): void {
    collectionRef
        .doc(id)
        .delete()
        .then(() => {
            console.log('Document successfully deleted!');
        })
        .catch((error) => {
            console.error('Error removing document: ', error);
        });
}
// -----------------------------------------------------------------------------

/** Retrieves document in the provided collection reference with the given document id.*/
export function getDocument(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    id: string,
): Promise<void | firebase.firestore.DocumentData | undefined> {
    return collectionRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log('Document data:', doc.data());
                return doc.data();
            } else {
                console.log('No such document!');
                return;
            }
        })
        .catch((error) => {
            console.log('Error getting document:', error);
        });
}
// -----------------------------------------------------------------------------

/** Retrieves all the documents in the provided collection reference.*/
export function getAllDocument(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
    return collectionRef.get().then((querySnapshot) => {
        console.log('Documents :', querySnapshot);
        return querySnapshot;
    });
}
// -----------------------------------------------------------------------------

/** Updates document in the provided collection reference with the given document id. It modifies fields provided in the data without overwriting the existing data.*/
export function updateDocument<Document extends { id: string }>(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    { id, ...data }: Document,
): void {
    collectionRef
        .doc(id)
        .update(data)
        .then(() => {
            console.log('Document successfully updated!');
        })
        .catch((error) => {
            console.error('Error updating document: ', error);
        });
}
// -----------------------------------------------------------------------------
