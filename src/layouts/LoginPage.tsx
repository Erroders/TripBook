import { userLoginWithGoogle } from '../utils/firebase/firebaseUtils';

const LoginPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center mx-auto md:w-2/3 lg:w-1/3 relative min-h-screen">
            <div className="flex flex-col items-center bg-gray-200 p-10">
                <p>Login Page</p>
                <button
                    className="p-2 bg-blue-400 rounded"
                    onClick={() => {
                        const result = userLoginWithGoogle();
                        result.then((userDataFromGoogle) => {
                            if (userDataFromGoogle?.existing) {
                                // after getting all details of this user and setting it in loginContext
                                // redirect to /home
                            } else {
                                // fill *username* and bio
                                // if possible display details from google
                                // after getting all details of this user and setting it in loginContext
                                // to /home
                            }
                        });
                    }}
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
