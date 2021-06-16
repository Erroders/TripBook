import React, { useEffect, useRef, useState } from 'react';
import TripDetails from '../components/Trip/TripDetails';
import Post from '../components/Trip/Post';
import EndCredit from '../components/Trip/EndCredit';
import FAB from '../components/Trip/Fab';
import CoverImage from '../components/Trip/CoverImage';
import { useHistory, useParams } from 'react-router-dom';
import { TRIP_DATA } from '../models/TripData';
import { getTrip, setCurrentTrip } from '../utils/controller/TripController';
import LinkButton from '../components/General/LinkButton';
import { PlusIcon } from '@heroicons/react/outline';
import { useUserContext } from '../contexts/LoginedUserContext';
import ClickButton from '../components/General/ClickButton';

const Trip: React.FC = () => {
    const { user } = useUserContext();
    const history = useHistory();
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
                {user?.username && user.currentTrip === tripId && (
                    <LinkButton
                        link={`/user/${data.username}/edit/${data.id}/${data.noOfPosts + 1}`}
                        text="Add Moment"
                        heroIcon={<PlusIcon />}
                        color="bg-blue-200"
                    />
                )}
            </div>

            <div className="px-4 pt-2">
                {user?.username && user.currentTrip === tripId && (
                    <ClickButton
                        text="End Trip"
                        heroIcon={<PlusIcon />}
                        color="bg-red-200"
                        onClick={() => {
                            setCurrentTrip(user.username, '');
                            history.push(`/profile/${user.username}`);
                        }}
                    />
                )}
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

            {/* TODO: Only show if trip ended */}
            <EndCredit />
        </div>
    );
};

export default Trip;
