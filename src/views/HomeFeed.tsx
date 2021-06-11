import React from 'react';
import TripBox from '../components/HomeFeed/TripBox';
import { TRIP_DATA } from '../models/TripData';
import { getTripData } from '../utils/getTripData';

const HomeFeed: React.FC = () => {
    const trip: TRIP_DATA = getTripData('unicef', 'adasd');

    return (
        <div className="pb-14">
            <TripBox
                id={'adasd'}
                coverImage={trip.coverImage}
                noOfPosts={trip.noOfPosts}
                title={trip.title}
                details={trip.details}
                userProfilePhotoUrl={trip.userProfilePhotoUrl}
                username={trip.username}
                lastUpdated={trip.lastUpdated}
            />
            <TripBox
                id={'adasd'}
                coverImage={trip.coverImage}
                noOfPosts={trip.noOfPosts}
                title={trip.title}
                details={trip.details}
                userProfilePhotoUrl={trip.userProfilePhotoUrl}
                username={trip.username}
                lastUpdated={trip.lastUpdated}
            />
            <TripBox
                id={'adasd'}
                coverImage={trip.coverImage}
                noOfPosts={trip.noOfPosts}
                title={trip.title}
                details={trip.details}
                userProfilePhotoUrl={trip.userProfilePhotoUrl}
                username={trip.username}
                lastUpdated={trip.lastUpdated}
            />
        </div>
    );
};

export default HomeFeed;
