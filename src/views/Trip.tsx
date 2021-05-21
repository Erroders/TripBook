import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UserIndicator from '../components/Trip/UserIndicator';
import TripDetails from '../components/Trip/TripDetails';
import Post from '../components/Trip/Post';
import { getTripData } from '../utils/getTripData';

const Trip: React.FC = () => {
    const data = getTripData('unicef', 'adasd');

    return (
        <div>
            <div className="bg-purple-400 relative text-primary-white font-display">
                <button className="top-2 absolute px-4 py-2 focus:outline-none">
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
                <img
                    src={data.coverImage}
                    alt="Trip Cover Image"
                    className="h-tripCoverImage object-cover object-center"
                />
                <div
                    className="bottom-2 absolute p-4"
                    style={{
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 1)',
                    }}
                >
                    <span className="font-medium text-sm uppercase">{data.noOfPosts} Posts</span>
                    <h1 className="text-4xl font-semibold">{data.title}</h1>

                    <UserIndicator userProfilePicSrc={data.userProfilePhotoUrl} username={data.username} />
                </div>
            </div>

            <TripDetails tripDetails={data.details} lastUpdated={data.lastUpdated} />

            <div>
                {data.posts.map((post) => {
                    return (
                        <Post
                            key={post.index}
                            index={post.index}
                            title={post.title}
                            caption={post.caption}
                            postsUrl={post.postsUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Trip;
