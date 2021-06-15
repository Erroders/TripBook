import React, { useContext } from 'react';
import UserStats from '../components/ProfilePage/UserStats';
import UserTrips from '../components/ProfilePage/UserTrips';
import { TRIP_DATA } from '../models/TripData';
import { USER_DATA } from '../models/UserData';
import { getAllTrips } from '../utils/controller/TripController';
import { getUser } from '../utils/controller/UserController';
import { useEffect, useState } from 'react';
import HomeLayout from '../layouts/MainLayout';
import Loading from '../components/General/Loading';
import LoadingContext from '../contexts/LoadingContext';
// import { useParams } from 'react-router';

const UserProfile: React.FC = () => {
    // const { userId } = useParams<{ userId: string }>();
    const userId = 'nonitmittal';
    const [userData, setuserData] = useState<USER_DATA | null>(null);

    const [tripData, settripData] = useState<TRIP_DATA[]>([]);
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    useEffect(() => {
        if (userId) {
            getUser(userId).then((user) => {
                if (user) {
                    setuserData(user);
                }
            });

            getAllTrips(userId).then((trips) => {
                if (trips) {
                    settripData(trips);
                }
            });
            setLoading && setLoading(false);
        }
    }, [userId]);

    return loading ? (
        <Loading />
    ) : (
        userData && (
            <HomeLayout>
                {userData.username ? (
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
                    </div>
                ) : (
                    <div>
                        <p>No such User Found !!</p>
                    </div>
                )}
            </HomeLayout>
        )
    );
};

export default UserProfile;
