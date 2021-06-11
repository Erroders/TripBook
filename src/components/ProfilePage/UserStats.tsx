import React from 'react';
import { USER_FOLLOW } from '../../models/UserData';
import { LogoutIcon, PencilAltIcon, CheckCircleIcon as CheckCircleIcon0 } from '@heroicons/react/outline';
import { CheckCircleIcon as CheckCircleIcon1 } from '@heroicons/react/solid';

interface IUserStatsProps {
    username: string;
    userProfilePhotoUrl: string;
    firstName: string;
    lastName: string;
    bio: string;
    followers: Array<USER_FOLLOW>;
    followings: Array<USER_FOLLOW>;
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
    const usernameLogin = 'akathecoder1';
    const follow = true;

    return (
        <div className="flex flex-col border-gray-300 border-b p-5">
            <div className="flex flex-row items-center justify-around lg:justify-evenly">
                {/* userProfilePhotoUrl */}
                <img
                    src={userProfilePhotoUrl}
                    alt="User Profile Picture"
                    className="h-userProfilePicBig w-userProfilePicBig rounded-full p-1 border border-primary-blue object-cover"
                />
                <div className="flex flex-col">
                    {/* Username */}
                    <p className="text-2xl font-light tracking-wide">{username}</p>
                    {/* followers + followings + noOfTrips */}
                    <div className="flex flex-row text-sm py-2.5 space-x-userStatsGap lg:space-x-8">
                        <div className="flex flex-col items-center">
                            <p className="font-bold">{noOfTrips}</p>
                            <p>Trips</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">{followers.length}</p>
                            <p>Followers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold">{followings.length}</p>
                            <p>Followings</p>
                        </div>
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
                {usernameLogin === username ? (
                    <button className="w-full p-1.5 justify-center flex bg-gray-200 rounded border hover:bg-white hover:border-gray-300 focus:outline-none shadow font-semibold">
                        <div className="flex flex-row items-center mx-auto space-x-3">
                            <PencilAltIcon className="w-4 h-4" />
                            <p className="text-sm">Edit Profile</p>
                        </div>
                    </button>
                ) : (
                    <button className="w-full p-1.5 justify-center flex bg-gray-200 rounded border hover:bg-white hover:border-gray-300 focus:outline-none shadow font-semibold">
                        {follow ? (
                            <div className="flex flex-row items-center mx-auto space-x-3">
                                <CheckCircleIcon1 className="w-4 h-4" />
                                <p className="text-sm font-medium">Following</p>
                            </div>
                        ) : (
                            <div className="flex flex-row items-center mx-auto space-x-3">
                                <CheckCircleIcon0 className="w-4 h-4" />
                                <p className="text-sm">Follow</p>
                            </div>
                        )}
                    </button>
                )}
            </div>

            {/* LogOut */}
            <div className={`${usernameLogin === username ? 'pt-3' : 'hidden'} `}>
                <button className="w-full p-1.5 justify-center flex bg-red-200 rounded border hover:bg-red-100 border-red-200 focus:outline-none shadow font-semibold">
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
