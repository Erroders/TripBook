import React, { useEffect, useRef, useState } from 'react';
import ClickButton from '../components/General/ClickButton';
// import { PlusIcon } from '@heroicons/react/outline';

import MainLayout from '../layouts/MainLayout';

const EditProfile: React.FC = () => {
    const imageRef = useRef<HTMLInputElement>(null);

    const [imageUrl, setImageUrl] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        // TODO: get user data
    }, []);

    const handleImageUpload = () => {
        // TODO: Upload data
        // if (userId && fileName) {
        //     uploadTripCoverImage(userId, uuidv4(), fileName, imageRef.current?.files?.item(0)).then((value) => {
        //         setImageUrl(value);
        //     });
        // }
    };

    const handleSubmit = () => {
        // TODO: Handle Submit
    };

    const errorImage = 'https://img.icons8.com/ios/256/000000/user-male-circle.png';

    return (
        <>
            <MainLayout>
                <form noValidate autoComplete="false">
                    <div className="p-3">
                        <input
                            type="file"
                            name="userProfilePicInput"
                            id="userProfilePicInput"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                            ref={imageRef}
                        />
                        <div className="flex h-44">
                            <label htmlFor="userProfilePicInput" className="mx-auto my-auto">
                                <img
                                    src={imageUrl}
                                    alt="Moment Image"
                                    onError={() => {
                                        setImageUrl(errorImage);
                                    }}
                                    className="object-cover max-h-40 rounded-full"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="p-3">
                        {username && (
                            <>
                                <label htmlFor="username" className="text-sm font-light px-1">
                                    Username
                                </label>
                                <br />
                            </>
                        )}
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="w-full p-2 border outline-none rounded-md"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="p-3">
                        {firstName && (
                            <>
                                <label htmlFor="firstName" className="text-sm font-light px-1">
                                    First Name
                                </label>
                                <br />
                            </>
                        )}
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="w-full p-2 border outline-none rounded-md"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="p-3">
                        {lastName && (
                            <>
                                <label htmlFor="lastName" className="text-sm font-light px-1">
                                    Last Name
                                </label>
                                <br />
                            </>
                        )}
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="w-full p-2 border outline-none rounded-md"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="p-3">
                        {bio && (
                            <>
                                <label htmlFor="bio" className="text-sm font-light px-1">
                                    Bio
                                </label>
                                <br />
                            </>
                        )}
                        <input
                            type="text"
                            name="bio"
                            id="bio"
                            className="w-full p-2 border outline-none rounded-md"
                            placeholder="Bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                </form>

                <div className="grid grid-cols-2">
                    <div className="p-3">
                        <ClickButton text="Go Back" onClick={() => window.history.back()} />
                    </div>
                    <div className="p-3">
                        <ClickButton text="Submit" onClick={handleSubmit} color="bg-blue-400" />
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default EditProfile;
