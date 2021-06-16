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
                <div className="flex items-center space-x-3">
                    <img
                        src={follower.userProfilePhotoUrl}
                        alt="User Profile Picture"
                        className="h-11 w-11 rounded-full object-cover p-0.5"
                    />
                    <span className="my-auto text-lg font-semibold tracking-wide ml-2">{follower.username}</span>
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
