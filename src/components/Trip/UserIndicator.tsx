import React from 'react';

interface UserIndicatorProps {
    userProfilePicSrc: string;
    username: string;
}

const UserIndicator: React.FC<UserIndicatorProps> = ({ userProfilePicSrc, username }: UserIndicatorProps) => {
    const errorUserImage = 'https://img.icons8.com/ios-filled/100/ffffff/gender-neutral-user.png';

    return (
        <>
            <div className="flex mt-2">
                <a href="#" className="flex">
                    <img
                        src={userProfilePicSrc ? userProfilePicSrc : errorUserImage}
                        alt="User Profile Picture"
                        className="h-userProfilePicSmall rounded-full border border-primary-blue"
                    />
                    <span className="my-auto text-lg font-semibold ml-2">{username}</span>
                </a>
            </div>
        </>
    );
};

export default UserIndicator;
