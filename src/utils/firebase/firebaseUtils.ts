// Imports
import firebase, { storage } from './firebase';
// -----------------------------------------------------------------------------

// ================================FIRESTORE====================================
// Enum Collection
export enum Collection {
    USERS = 'USERS',
    TRIPS = 'TRIPS',
    POSTS = 'POSTS',
}
// -----------------------------------------------------------------------------

/** Adds document to the given collection reference.
 If 'id' is not provided in the data object (second parameter) firestore aotomatically generates it.*/
export async function addDocument<Document extends { id?: string }>(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    { id, ...data }: Document,
    merge = true,
): Promise<string | undefined> {
    if (id) {
        return await collectionRef
            .doc(id)
            .set(data, { merge: merge })
            .then(() => {
                console.log('Document successfully written!');
                return id;
            })
            .catch((error) => {
                console.error('Error writing document: ', error);
                return undefined;
            });
    } else {
        return await collectionRef
            .add(data)
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                return docRef.id;
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
                return undefined;
            });
    }
}
// -----------------------------------------------------------------------------

/** Deletes document in the provided collection reference with the given document id.*/
export async function deleteDocument(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    id: string,
): Promise<void> {
    await collectionRef
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
export async function getDocument(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    id: string,
): Promise<void | firebase.firestore.DocumentData | undefined> {
    return await collectionRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log('Document data:', { id: doc.id, ...doc.data() });
                return { id: doc.id, ...doc.data() };
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
export async function getAllDocument(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
): Promise<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]> {
    return await collectionRef.get().then((querySnapshot) => {
        console.log('Documents :', querySnapshot.docs);
        return querySnapshot.docs;
    });
}
// -----------------------------------------------------------------------------

/** Updates document in the provided collection reference with the given document id. It modifies fields provided in the data without overwriting the existing data.*/
export async function updateDocument<Document extends { id: string }>(
    collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
    { id, ...data }: Document,
): Promise<void> {
    await collectionRef
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

// =================================STORAGE=====================================
const storageRef = storage.ref();
// -----------------------------------------------------------------------------

// upload file
export async function uploadFile(
    fileRef: firebase.storage.Reference,
    file: Blob | Uint8Array | ArrayBuffer,
): Promise<string> {
    return await fileRef
        .put(file)
        .then((snapshot) => {
            console.log('Uploaded a blob or file!');
            return snapshot.ref.getDownloadURL();
        })
        .catch((error) => {
            console.error('Error occured while uploading the file!!', error);
        });
}
// -----------------------------------------------------------------------------

// download file
export async function downloadFile(fileRef: firebase.storage.Reference): Promise<void> {
    await fileRef.delete();
    storageRef
        .child('images/stars.jpg')
        .getDownloadURL()
        .then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (_event) => {
                // const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
        })
        .catch((error) => {
            console.error('Error occured while downloading the file!!', error);
        });
}
// -----------------------------------------------------------------------------

// delete file
export async function deleteFile(fileRef: firebase.storage.Reference): Promise<void> {
    await fileRef
        .delete()
        .then(() => {
            console.log('File deleted successfully!');
        })
        .catch((error) => {
            console.error('Error occured while deleting the file!!', error);
        });
}
// -----------------------------------------------------------------------------

// ==================================AUTH=======================================

export async function userLoginWithGoogle() {
    // set default language to browser's default
    firebase.auth().useDeviceLanguage();

    // Start a sign in process for an unauthenticated user.
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    console.log(provider);
    return await firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;

            return {
                existing: result?.additionalUserInfo?.isNewUser,
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
            };
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
}
