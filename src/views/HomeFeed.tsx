import React, { useContext, useEffect, useState } from 'react';
import TripBox from '../components/HomeFeed/TripBox';
import { TRIP_DATA } from '../models/TripData';
import { getHomeFeeds } from '../utils/controller/TripController';
import { useUserContext } from '../contexts/LoginedUserContext';
import HomeLayout from '../layouts/MainLayout';
import LoadingContext from '../contexts/LoadingContext';
import Loading from '../components/General/Loading';
import { SearchIcon } from '@heroicons/react/outline';

const HomeFeed: React.FC = () => {
    const [feedData, setfeedData] = useState<TRIP_DATA[]>([]);
    const { user } = useUserContext();
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    useEffect(() => {
        user &&
            getHomeFeeds(user.followings).then((data) => {
                data.length > 0 && setfeedData(data);
                setLoading && setLoading(false);
            });
    }, [user]);

    return loading ? (
        <Loading />
    ) : (
        <HomeLayout>
            <div>
                {feedData.length !== 0 ? (
                    feedData.map((feed, index) => {
                        return (
                            <TripBox
                                key={index}
                                id={feed.id ? feed.id : ''}
                                coverImage={feed.coverImage}
                                noOfPosts={feed.noOfPosts}
                                title={feed.title}
                                details={feed.details}
                                userProfilePhotoUrl={feed.userProfilePhotoUrl}
                                username={feed.username}
                                lastUpdated={feed.lastUpdated}
                            />
                        );
                    })
                ) : (
                    <div className="mt-40 text-center flex flex-col opacity-70 space-y-5 px-10">
                        <p className="text-4xl font-bold py-3">{`Welcome ${user?.firstName}!`}</p>
                        <p className="text-xl font-semibold">
                            Start
                            <span>
                                <SearchIcon className="h-4 w-4 inline mb-1 mx-2" />
                            </span>
                            trippers and follow them {<br />}to brew your feeds 😉
                        </p>
                    </div>
                )}
            </div>
        </HomeLayout>
    );
};

export default HomeFeed;
