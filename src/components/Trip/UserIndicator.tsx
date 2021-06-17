import React from 'react';
import { Link } from 'react-router-dom';

interface UserIndicatorProps {
    userProfilePicSrc: string;
    username: string;
}

const UserIndicator: React.FC<UserIndicatorProps> = ({ userProfilePicSrc, username }: UserIndicatorProps) => {
    const errorUserImage = 'https://img.icons8.com/ios-filled/100/ffffff/gender-neutral-user.png';

    return (
        <>
            <div className="flex mt-2">
                <Link to={`/profile/${username}`} className="flex">
                    <img
                        src={userProfilePicSrc ? userProfilePicSrc : errorUserImage}
                        alt="User Profile Picture"
                        className="h-userProfilePicSmall w-userProfilePicSmall rounded-full border border-primary-blue"
                    />
                    <span className="my-auto text-lg font-semibold ml-2">{username}</span>
                </Link>
            </div>
        </>
    );
};

export default UserIndicator;
