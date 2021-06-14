import React from 'react';
import UserStats from '../components/ProfilePage/UserStats';
import UserTrips from '../components/ProfilePage/UserTrips';
import { TRIP_DATA } from '../models/TripData';
import { USER_DATA } from '../models/UserData';
import { getAllTrips } from '../utils/controller/TripController';
import { getUser } from '../utils/controller/UserController';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import ListOfUsers from '../components/ProfilePage/ListOfUsers';

const UserProfile: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
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
        currentTrip: '',
    });

    const [tripData, settripData] = useState<TRIP_DATA[]>([]);

    useEffect(() => {
        getUser(userId).then((user) => {
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
                    currentTrip: '',
                });
            }
        });

        getAllTrips(userId).then((trips) => {
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
            <UserTrips trips={tripData} username={userData.username} />
            {/* <ListOfUsers followers={userData.followers} followings={userData.followings} /> */}
        </div>
    ) : (
        <div>
            <p>No such User Found !!</p>
        </div>
    );
};

export default UserProfile;
