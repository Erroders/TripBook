import React from 'react';
import { USER_FOLLOW } from '../../models/UserData';
import { LogoutIcon, PencilAltIcon } from '@heroicons/react/outline';
import FollowButton from '../General/FollowButton';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/LoginedUserContext';
import { auth } from '../../utils/firebase/firebase';
import { useHistory } from 'react-router';

interface IUserStatsProps {
    username: string;
    userProfilePhotoUrl: string;
    firstName: string;
    lastName: string;
    bio: string;
    followers: USER_FOLLOW;
    followings: USER_FOLLOW;
    noOfTrips: number;
}

const UserStats: React.FC<IUserStatsProps> = ({
    username,
    userProfilePhotoUrl,
    firstName,
    lastName,
    bio,
    followers,
    followings,
    noOfTrips,
}: IUserStatsProps) => {
    const { user: userLogin } = useUserContext();
    const history = useHistory();

    return (
        <div className="flex flex-col border-gray-300 border-b p-5 pb-7">
            <div className="flex flex-row items-center justify-around lg:justify-evenly">
                {/* userProfilePhotoUrl */}
                <img
                    src={userProfilePhotoUrl}
                    alt="User Profile Picture"
                    className="h-userProfilePicBig w-userProfilePicBig rounded-full p-1 border border-primary-blue object-cover"
                />
                <div className="flex flex-col">
                    {/* Username */}
                    <p className="ml-2 text-2xl font-light tracking-wide">{username}</p>
                    {/* followers + followings + noOfTrips */}
                    <div className="flex flex-row text-sm py-2.5 space-x-userStatsGap lg:space-x-8">
                        <div className="flex flex-col items-center">
                            <p className="font-bold">{noOfTrips}</p>
                            <p>Trips</p>
                        </div>
                        <Link to={`/profile/${username}/followers`}>
                            <div className="flex flex-col items-center cursor-pointer">
                                <p className="font-bold">{Object.keys(followers).length}</p>
                                <p>Followers</p>
                            </div>
                        </Link>
                        <Link to={`/profile/${username}/followings`}>
                            <div className="flex flex-col items-center cursor-pointer">
                                <p className="font-bold">{Object.keys(followings).length}</p>
                                <p>Followings</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* firstName + lastName + bio */}
            <div className="text-sm py-3 lg:px-10">
                <p className="font-bold">
                    {firstName} {lastName}
                </p>
                <p>{bio}</p>
            </div>

            {/* Edit Profile + Follow/Follwing */}
            <div>
                {userLogin?.username === username ? (
                    <button
                        className="w-full p-1.5 justify-center flex bg-gray-200 rounded border hover:bg-white hover:border-gray-300 focus:outline-none shadow font-semibold"
                        onClick={() => {
                            history.push('/editProfile');
                        }}
                    >
                        <div className="flex flex-row items-center mx-auto space-x-3">
                            <PencilAltIcon className="w-4 h-4" />
                            <p className="text-sm">Edit Profile</p>
                        </div>
                    </button>
                ) : (
                    <FollowButton username={username} />
                )}
            </div>

            {/* LogOut */}
            <div className={`${userLogin?.username === username ? 'pt-3' : 'hidden'} `}>
                <button
                    className="w-full p-1.5 justify-center flex bg-red-200 rounded border hover:bg-red-100 border-red-200 focus:outline-none shadow font-semibold"
                    onClick={() => {
                        auth.signOut();
                        history.push('/login');
                    }}
                >
                    <div className="flex flex-row items-center mx-auto space-x-3">
                        <LogoutIcon className="w-4 h-4" />
                        <p className="text-sm">LogOut</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default UserStats;
