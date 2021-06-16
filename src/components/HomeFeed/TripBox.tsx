import React from 'react';
import fromnow from 'fromnow';
import { Link } from 'react-router-dom';

interface ThumbnailProps {
    id: string;
    coverImage: string;
    noOfPosts: number;
    title: string;
    details: string;
    userProfilePhotoUrl: string;
    username: string;
    lastUpdated: Date;
}

const TripBox: React.FC<ThumbnailProps> = ({
    id,
    coverImage,
    noOfPosts,
    title,
    details,
    userProfilePhotoUrl,
    username,
    lastUpdated,
}: ThumbnailProps) => {
    return (
        <div className="relative font-display mb-7 mt-2">
            {/* UserProfilePic + Name */}
            <div className="flex items-center px-2 py-2 border-b border-gray-300">
                <a href="#" className="flex">
                    <img
                        src={userProfilePhotoUrl}
                        alt="User Profile Picture"
                        className="h-userProfilePicSmall w-userProfilePicSmall rounded-full border border-primary-blue object-cover"
                    />
                    <span className="my-auto text-lg font-semibold tracking-wide ml-2">{username}</span>
                </a>
            </div>
            <Link to={`/user/${username}/${id}`}>
                {/* Cover Image */}
                <div className="flex justify-center">
                    <img src={coverImage} alt="Trip Cover Image" className="object-cover" />
                </div>
                {/* Trip Title + details + no.of posts + lastUpdated */}
                <div className="flex flex-col mt-2 px-3">
                    <div className="text-xl font-bold">{title}</div>
                    <div className="tracking-wide text-sm">{details.substring(0, 150)}..... </div>
                    <div className="flex justify-between pt-2">
                        <span className="text-sm font-semibold">{noOfPosts} Posts</span>
                        <div className="font-light text-xs text-right">
                            {fromnow(lastUpdated, {
                                max: 1,
                                suffix: true,
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TripBox;
