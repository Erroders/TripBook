import React from 'react';
import { useUserContext } from '../../contexts/LoginedUserContext';
import { useHistory } from 'react-router';
import { createUser } from '../../utils/controller/UserController';
import { userConverter } from '../../utils/controller/UserController';
import firebase from '../../utils/firebase/firebase';
import { getUserByEmail } from '../../utils/controller/UserController';

interface Props {
    displayName: string | null | undefined;
    email: string | null | undefined;
    photoURL: string | null | undefined;
}

const FillDetails: React.FC<Props> = ({ displayName, email, photoURL }: Props) => {
    const { setUser } = useUserContext();
    const history = useHistory();

    const SignUp = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUser({
            username: event.target.username.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            bio: event.target.bio.value,
            email: event.target.email.value,
            userProfilePhotoUrl: photoURL ? photoURL : '',
            followers: {},
            followings: {},
            noOfTrips: 0,
            currentTrip: '',
        });

        const cb = (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
            if (!snapshot.empty) {
                snapshot.forEach((userDoc) => {
                    setUser && setUser(userConverter.fromFirestore({ id: userDoc.id, ...userDoc.data() }));
                });
            }
        };
        getUserByEmail(email ? email : '', cb);
        history.push('/home');
    };

    return (
        <div className="z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <form
                className="flex flex-col w-4/5 h-4/6 items-center overflow-y-auto bg-gray-100 p-7 lg:p-14 rounded-md"
                onSubmit={SignUp}
            >
                <img
                    src={photoURL ? photoURL : ''}
                    className="rounded-full h-userProfilePicBig w-userProfilePicBig object-cover border border-blue-300 p-1"
                />
                <div className="w-full flex flex-col py-1.5">
                    <p className="font-medium text-gray-600 text-sm py-1">Username</p>
                    <input
                        type="text"
                        name="username"
                        required
                        placeholder="Enter Username"
                        className="px-3 py-1.5 font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-50 tracking-wide border border-gray-400"
                    />
                </div>
                <div className="w-full flex flex-col py-1.5">
                    <p className="font-medium text-gray-600 text-sm py-1">First Name</p>
                    <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Enter firstName"
                        defaultValue={displayName?.split(' ')[0]}
                        className="px-3 py-1.5 font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-50 tracking-wide border border-gray-400 placeholder-gray-300"
                    />
                </div>
                <div className="w-full flex flex-col py-1.5">
                    <p className="font-medium text-gray-600 text-sm py-1">Last Name</p>
                    <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Enter lastName"
                        defaultValue={displayName?.split(' ')[1]}
                        className="px-3 py-1.5 font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-50 tracking-wide border border-gray-400 placeholder-gray-300"
                    />
                </div>
                <div className="w-full flex flex-col py-1.5">
                    <p className="font-medium text-gray-600 text-sm py-1">Email ID</p>
                    <input
                        type="email"
                        name="email"
                        disabled
                        defaultValue={email ? email : ''}
                        className="px-3 py-1.5 font-semibold rounded-md focus:outline-none tracking-wide border border-gray-400 "
                    />
                </div>
                <div className="w-full flex flex-col py-1.5">
                    <p className="font-medium text-gray-600 text-sm py-1">Bio..</p>
                    <textarea
                        name="bio"
                        placeholder="Enter You Bio (optional)"
                        className="px-3 py-1.5 font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-50 tracking-wide border border-gray-400 placeholder-gray-300"
                    />
                </div>
                <div className="w-full flex flex-col py-4">
                    <button
                        className="p-1.5 rounded border bg-blue-600 text-gray-100 hover:bg-blue-200 focus:outline-none shadow font-bold"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FillDetails;

// const FillDetails = () => {
//     return <div></div>;
// };

// export default FillDetails;
