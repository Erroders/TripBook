import { getUserByEmail } from '../utils/controller/UserController';
import { userLoginWithGoogle } from '../utils/firebase/firebaseUtils';
import { useUserContext } from '../contexts/LoginedUserContext';
import { useHistory } from 'react-router';
import FillDetails from '../components/Login/FillDetails';
import { userConverter } from '../utils/controller/UserController';
import firebase from '../utils/firebase/firebase';
import { useState } from 'react';
import googleIcon from '../assets/googleIcon.svg';
import background from '../assets/adventure_map.svg';

const LoginPage = () => {
    const { setUser } = useUserContext();
    const history = useHistory();

    // Values for FillDetails page (requires)
    const [visible, setvisible] = useState(false);
    const [photoURL, setphotoURL] = useState<string | null | undefined>('');
    const [email, setemail] = useState<string | null | undefined>('');
    const [displayName, setdisplayName] = useState<string | null | undefined>('');

    return (
        <div className="flex flex-col mx-auto md:w-2/3 lg:w-1/3 relative min-h-screen">
            <div className="flex flex-col justify-evenly h-screen">
                <div className="flex flex-col px-10 justify-evenly">
                    <img src="./logo512.png" alt="TripBook Logo" className="p-7 lg:px-20 object-contain" />
                    <button
                        className="w-full py-3 bg-white rounded shadow hover:bg-red-400 hover:text-gray-50 focus:outline-none font-semibold hover:shadow-xl border-gray-100 border"
                        onClick={() => {
                            userLoginWithGoogle().then((userLoggedIn) => {
                                if (!userLoggedIn?.existing) {
                                    const cb = (
                                        snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
                                    ) => {
                                        if (!snapshot.empty) {
                                            snapshot.forEach((userDoc) => {
                                                setUser &&
                                                    setUser(
                                                        userConverter.fromFirestore({
                                                            id: userDoc.id,
                                                            ...userDoc.data(),
                                                        }),
                                                    );
                                            });
                                        }
                                    };
                                    userLoggedIn && getUserByEmail(userLoggedIn.email ? userLoggedIn.email : '', cb);
                                    history.push('/home');
                                } else {
                                    userLoggedIn && setdisplayName(userLoggedIn?.displayName);
                                    userLoggedIn && setemail(userLoggedIn?.email);
                                    userLoggedIn && setphotoURL(userLoggedIn?.photoURL);
                                    setvisible(true);
                                }
                            });
                        }}
                    >
                        <div className="flex items-center justify-center space-x-5">
                            <img src={googleIcon} alt="G" className="h-5 w-5" />
                            <p> Sign In with Google</p>
                        </div>
                    </button>
                </div>
                <img src={background} alt="Background Image" className="object-contain mx-1" />
            </div>

            {visible && <FillDetails displayName={displayName} email={email} photoURL={photoURL} />}
        </div>
    );
};

export default LoginPage;
