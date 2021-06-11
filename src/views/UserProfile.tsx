// import React from 'react';
import UserStats from '../components/ProfilePage/UserStats';
import UserTrips from '../components/ProfilePage/UserTrips';
import { TRIP_DATA } from '../models/TripData';
import { USER_DATA } from '../models/UserData';
import { getTripData, getUserData } from '../utils/getTripData';

const UserProfile = () => {
    const trip: TRIP_DATA = getTripData('unicef', 'adasd');
    const user: USER_DATA = getUserData('akathecoder');

    console.log(user);
    console.log(trip);

    return trip.id ? (
        <div>
            <UserStats
                username={user.username}
                userProfilePhotoUrl={user.userProfilePhotoUrl}
                firstName={user.firstName}
                lastName={user.lastName}
                bio={user.bio}
                followers={user.followers}
                followings={user.followings}
                noOfTrips={user.noOfTrips}
            />
            <UserTrips coverImage={trip.coverImage} tripId={trip.id} />
        </div>
    ) : (
        <div></div>
    );
};

export default UserProfile;
