import React, { useRef } from 'react';
import TripDetails from '../components/Trip/TripDetails';
import Post from '../components/Trip/Post';
import { getTripData } from '../utils/getTripData';
import EndCredit from '../components/Trip/EndCredit';
import FAB from '../components/Trip/Fab';
import CoverImage from '../components/Trip/CoverImage';

const Trip: React.FC = () => {
    const data = getTripData('unicef', 'adasd');
    const scrollTopDiv = useRef<HTMLInputElement>(null);

    return (
        <div>
            <div ref={scrollTopDiv} />

            <CoverImage
                coverImage={data.coverImage}
                noOfPosts={data.noOfPosts}
                title={data.title}
                userProfilePhotoUrl={data.userProfilePhotoUrl}
                username={data.username}
            />

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

            <FAB scrollTopDiv={scrollTopDiv} />

            <EndCredit />
        </div>
    );
};

export default Trip;
