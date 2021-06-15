import { useParams } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import { USER_DATA } from '../models/UserData';
import { getFollowings, getUser } from '../utils/controller/UserController';
import ListOfUsers from '../components/ProfilePage/ListOfUsers';
import Loading from '../components/General/Loading';
import LoadingContext from '../contexts/LoadingContext';
import HomeLayout from '../layouts/MainLayout';

const Followings = () => {
    // const userLogin = 'nonitmittal';
    const { userId } = useParams<{ userId: string }>();
    const [userData, setuserData] = useState<USER_DATA | null>(null);
    const [followingsData, setFollowingsData] = useState<USER_DATA[]>([]);
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    useEffect(() => {
        getUser(userId).then((user) => {
            if (user) {
                setuserData(user);
            }
        });
    }, []);

    useEffect(() => {
        if (userData) {
            getFollowings(userData.followings).then((followData) => {
                setFollowingsData(followData);
                setLoading && setLoading(false);
            });
        }
    }, [userData]);

    return (
        // TODO check if (username === userLogin) then use followings data from context
        <HomeLayout>
            {loading ? (
                <Loading />
            ) : (
                <ListOfUsers followData={followingsData} selected={'followings'} loading={false} />
            )}{' '}
        </HomeLayout>
    );
};

export default Followings;
