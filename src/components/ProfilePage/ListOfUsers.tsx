import React, { useState } from 'react';
import { USER_FOLLOW } from '../../models/UserData';
import FollowButton from '../General/FollowButton';

interface Props {
    followers: Array<USER_FOLLOW>;
    followings: Array<USER_FOLLOW>;
}

const ListOfUsers: React.FC<Props> = ({ followers, followings }: Props) => {
    const [selected, setselected] = useState('followers');
    console.log(followers);

    return (
        <>
            {/* followers + followings button */}
            <div className="px-1 py-5">
                <div className="grid grid-cols-2 text-center text-sm">
                    <div
                        className={`${
                            (selected as string) === 'followers'
                                ? 'font-semibold border-b-2 border-gray-300'
                                : 'border-b border-gray-100 opacity-50'
                        } py-3 tracking-wide`}
                        onClick={() => {
                            setselected('followers');
                        }}
                    >
                        Followers
                    </div>
                    <div
                        className={`${
                            (selected as string) === 'followings'
                                ? 'font-semibold border-b-2 border-gray-300'
                                : 'border-b border-gray-100 opacity-50'
                        } py-3 tracking-wide`}
                        onClick={() => {
                            setselected('followings');
                        }}
                    >
                        Followings
                    </div>
                </div>
            </div>

            {/* followers + followings list */}
            <div className="px-7 lg:px-14 py-3">
                {selected === 'followers' ? (
                    followers.length != 0 ? (
                        <div className="flex flex-col space-y-5">
                            {followers.map((follower) => {
                                return (
                                    <div className="flex flex-row justify-between items-center" key={follower.username}>
                                        {/* UserProfilePic + Name */}
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={follower.userProfilePhotoUrl}
                                                alt="User Profile Picture"
                                                className="h-11 w-11 rounded-full object-cover p-0.5"
                                            />
                                            <span className="my-auto text-lg font-semibold tracking-wide ml-2">
                                                {follower.username}
                                            </span>
                                        </div>
                                        {/* Follow/Following Button */}
                                        <div>
                                            <FollowButton username={followers[0].username} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="my-20 text-center">
                            <p className="text-2xl font-bold opacity-70">You Have No Followers</p>
                        </div>
                    )
                ) : followings.length != 0 ? (
                    <div className="flex flex-col space-y-5">
                        {followings.map((following) => {
                            return (
                                <div className="flex flex-row justify-between items-center" key={following.username}>
                                    {/* UserProfilePic + Name */}
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={following.userProfilePhotoUrl}
                                            alt="User Profile Picture"
                                            className="h-11 w-11 rounded-full object-cover p-0.5"
                                        />
                                        <span className="my-auto text-lg font-semibold tracking-wide ml-2">
                                            {following.username}
                                        </span>
                                    </div>
                                    {/* Follow/Following Button */}
                                    <div>
                                        <FollowButton username={followers[0].username} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="my-20 text-center">
                        <p className="text-2xl font-bold opacity-70">You Have No Followings</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default ListOfUsers;
