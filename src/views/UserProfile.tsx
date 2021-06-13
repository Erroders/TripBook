import React from 'react';
import UserStats from '../components/ProfilePage/UserStats';
import UserTrips from '../components/ProfilePage/UserTrips';
import { TRIP_DATA } from '../models/TripData';
import { USER_DATA } from '../models/UserData';
import { getAllTrips } from '../utils/controller/TripController';
import { getUser } from '../utils/controller/UserController';
import { useEffect, useState } from 'react';

const UserProfile: React.FC = () => {
    const [userData, setuserData] = useState<USER_DATA>({
        username: '',
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        userProfilePhotoUrl: '',
        followers: [],
        followings: [],
        noOfTrips: 0,
    });

    const [tripData, settripData] = useState<TRIP_DATA[]>([]);

    useEffect(() => {
        getUser('akathecoder').then((user) => {
            if (user) {
                setuserData(user);
            } else {
                setuserData({
                    username: '',
                    firstName: '',
                    lastName: '',
                    bio: '',
                    email: '',
                    userProfilePhotoUrl: '',
                    followers: [],
                    followings: [],
                    noOfTrips: 0,
                });
            }
        });

        getAllTrips('akathecoder').then((trips) => {
            if (trips) {
                settripData(trips);
            } else {
                settripData([]);
            }
        });
    }, []);

    return userData.username ? (
        <div>
            <UserStats
                username={userData.username}
                userProfilePhotoUrl={userData.userProfilePhotoUrl}
                firstName={userData.firstName}
                lastName={userData.lastName}
                bio={userData.bio}
                followers={userData.followers}
                followings={userData.followings}
                noOfTrips={userData.noOfTrips}
            />
            <UserTrips trips={tripData} />
        </div>
    ) : (
        <div>
            <p>No such User Found !!</p>
        </div>
    );
};

export default UserProfile;
