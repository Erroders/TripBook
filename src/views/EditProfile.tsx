import React, { useEffect, useRef, useState } from 'react';
import ClickButton from '../components/General/ClickButton';
import { useUserContext } from '../contexts/LoginedUserContext';
import MainLayout from '../layouts/MainLayout';
import { updateUser, uploadUserProfileImage } from '../utils/controller/UserController';

const EditProfile: React.FC = () => {
    const imageRef = useRef<HTMLInputElement>(null);
    const { user } = useUserContext();

    const [imageUrl, setImageUrl] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        if (user) {
            user.userProfilePhotoUrl && setImageUrl(user.userProfilePhotoUrl);
            user.username && setUsername(user.username);
            user.firstName && setFirstName(user.firstName);
            user.lastName && setLastName(user.lastName);
            user.bio && setBio(user.bio);
        }
    }, []);

    const handleImageUpload = () => {
        uploadUserProfileImage(username, 'profileImage', imageRef.current?.files?.item(0)).then((newImageUrl) => {
            setImageUrl(newImageUrl);
        });
    };

    const handleSubmit = () => {
        if (!username && !firstName && !lastName) {
            return;
        }

        updateUser(username, {
            bio: bio,
            firstName: firstName,
            lastname: lastName,
            userProfilePhotoUrl: imageUrl,
        }).then(() => {
            window.history.back();
        });
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
                                    className="object-cover w-32 h-32 rounded-full"
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
                            disabled
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
                            required
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
                            required
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
