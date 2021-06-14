import React, { useEffect, useRef, useState } from 'react';
import TripDetails from '../components/Trip/TripDetails';
import Post from '../components/Trip/Post';
import EndCredit from '../components/Trip/EndCredit';
import FAB from '../components/Trip/Fab';
import CoverImage from '../components/Trip/CoverImage';
import { useParams } from 'react-router-dom';
import { TRIP_DATA } from '../models/TripData';
import { getTrip } from '../utils/controller/TripController';
import LinkButton from '../components/General/LinkButton';
import { PencilAltIcon } from '@heroicons/react/outline';

const Trip: React.FC = () => {
    const { userId, tripId } = useParams<{ userId: string; tripId: string }>();

    const [data, setData] = useState<TRIP_DATA>({
        id: '',
        coverImage: '',
        title: '',
        noOfPosts: 0,
        username: '',
        userProfilePhotoUrl: '',
        details: '',
        lastUpdated: new Date(),
        posts: [],
    });
    const scrollTopDiv = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (userId && tripId) {
            getTrip(userId, tripId).then((data) => {
                if (data) {
                    setData(data);
                }
            });
        }
    }, []);

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

            <div className="px-4 pt-6">
                {
                    // TODO: Add auth confirmation
                    true && (
                        <LinkButton
                            link={`/user/${data.username}/edit/${data.id}/${data.noOfPosts + 1}`}
                            text="Edit Trip"
                            heroIcon={<PencilAltIcon />}
                        />
                    )
                }
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

            <FAB scrollTopDiv={scrollTopDiv} />

            <EndCredit />
        </div>
    );
};

export default Trip;
