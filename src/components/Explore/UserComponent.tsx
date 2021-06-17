import React from 'react';
import { Link } from 'react-router-dom';
import { USER_DATA } from '../../models/UserData';
import FollowButton from '../General/FollowButton';

interface UserComponentProps {
    follower: USER_DATA;
}

const UserComponent: React.FC<UserComponentProps> = ({ follower }: UserComponentProps) => {
    return (
        <div className="flex flex-row justify-between items-center my-3">
            <Link to={`/profile/${follower.username}`}>
                {/* UserProfilePic + Name */}
                <div className="flex items-center space-x-2">
                    <img
                        src={follower.userProfilePhotoUrl}
                        alt="User Profile Picture"
                        className="h-12 w-12 rounded-full object-cover p-0.5"
                    />
                    <div className="flex flex-col">
                        <span className="my-auto text-lg font-semibold tracking-wide ml-2">{follower.username}</span>
                        <span className="my-auto text-xs text-gray-500 tracking-wider ml-2">
                            {follower.firstName} {follower.lastName}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Follow/Following Button */}
            <div>
                <FollowButton username={follower.username} />
            </div>
        </div>
    );
};

export default UserComponent;
