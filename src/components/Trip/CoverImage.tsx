import React from 'react';
import UserIndicator from './UserIndicator';

interface CoverImageProps {
    coverImage: string;
    noOfPosts: number;
    title: string;
    userProfilePhotoUrl: string;
    username: string;
}

const CoverImage: React.FC<CoverImageProps> = ({
    coverImage,
    noOfPosts,
    title,
    userProfilePhotoUrl,
    username,
}: CoverImageProps) => {
    return (
        <div className="bg-purple-400 relative text-primary-white font-display">
            <button className="top-2 absolute px-4 py-2 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img src={coverImage} alt="Trip Cover Image" className="h-tripCoverImage object-cover object-center" />
            <div
                className="bottom-2 absolute p-4"
                style={{
                    textShadow: '2px 2px 10px rgba(0, 0, 0, 1)',
                }}
            >
                <span className="font-medium text-sm uppercase">{noOfPosts} Posts</span>
                <h1 className="text-4xl font-semibold">{title}</h1>

                <UserIndicator userProfilePicSrc={userProfilePhotoUrl} username={username} />
            </div>
        </div>
    );
};

export default CoverImage;
