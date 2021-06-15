import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { USER_DATA } from '../../models/UserData';
import FollowButton from '../General/FollowButton';

interface Props {
    followData: USER_DATA[];
    selected: string;
    loading: boolean;
}

const ListOfUsers: React.FC<Props> = ({ followData, selected, loading }: Props) => {
    const { userId } = useParams<{ userId: string }>();
    useEffect(() => {
        console.log(loading, followData);
    }, [followData]);

    return (
        <>
            {/* followers + followings button */}
            <div className="px-1 py-5">
                <div className="grid grid-cols-2 text-center text-sm">
                    <Link to={`/profile/${userId}/followers`}>
                        <div
                            className={`${
                                selected === 'followers'
                                    ? 'font-semibold border-b-2 border-gray-300'
                                    : 'border-b border-gray-100 opacity-50'
                            } py-3 tracking-wide`}
                        >
                            Followers
                        </div>
                    </Link>
                    <Link to={`/profile/${userId}/followings`}>
                        <div
                            className={`${
                                selected === 'followings'
                                    ? 'font-semibold border-b-2 border-gray-300'
                                    : 'border-b border-gray-100 opacity-50'
                            } py-3 tracking-wide`}
                        >
                            Followings
                        </div>
                    </Link>
                </div>
            </div>

            {/* followers + followings list */}
            <div className="px-7 lg:px-14 py-3">
                {Object.keys(followData).length != 0 ? (
                    <div className="flex flex-col space-y-5">
                        {followData.map((follower) => {
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
                                        <FollowButton username={follower.username} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="my-20 text-center">
                        {selected === 'followers' ? (
                            <p className="text-2xl font-bold opacity-70">You Have No Followers</p>
                        ) : (
                            <p className="text-2xl font-bold opacity-70">You Have No Followings</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ListOfUsers;
