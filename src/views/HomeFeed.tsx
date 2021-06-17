import React, { useContext, useEffect, useState } from 'react';
import TripBox from '../components/HomeFeed/TripBox';
import { TRIP_DATA } from '../models/TripData';
import { getHomeFeeds } from '../utils/controller/TripController';
import { useUserContext } from '../contexts/LoginedUserContext';
import HomeLayout from '../layouts/MainLayout';
import LoadingContext from '../contexts/LoadingContext';
import Loading from '../components/General/Loading';

const HomeFeed: React.FC = () => {
    const [feedData, setfeedData] = useState<TRIP_DATA[]>([]);
    const { user } = useUserContext();
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        console.log(loading);
        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    useEffect(() => {
        user &&
            getHomeFeeds(user.followings).then((data) => {
                console.log(data);
                data.length > 0 && setfeedData(data);
            });
        console.log(feedData);
        setLoading && setLoading(false);
    }, [user]);

    return loading ? (
        <Loading />
    ) : (
        <HomeLayout>
            <div>
                {feedData.length !== 0
                    ? feedData.map((feed, index) => {
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
                    : 'No feeds'}
            </div>
        </HomeLayout>
    );
};

export default HomeFeed;
