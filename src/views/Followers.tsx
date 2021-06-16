import { useParams } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import { USER_DATA } from '../models/UserData';
import { getFollowers, getUser } from '../utils/controller/UserController';
import ListOfUsers from '../components/ProfilePage/ListOfUsers';
import HomeLayout from '../layouts/MainLayout';
import Loading from '../components/General/Loading';
import LoadingContext from '../contexts/LoadingContext';
import { useUserContext } from '../contexts/LoginedUserContext';

const Followers: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [userData, setuserData] = useState<USER_DATA | null>(null);
    const [followersData, setFollowersData] = useState<USER_DATA[]>([]);
    const { user: userLogin } = useUserContext();
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    useEffect(() => {
        userLogin?.username === userId
            ? setuserData(userLogin)
            : getUser(userId).then((user) => {
                  if (user) {
                      setuserData(user);
                  }
              });
    }, [userId]);

    useEffect(() => {
        if (userData) {
            getFollowers(userData.followers).then((followData) => {
                setFollowersData(followData);
                setLoading && setLoading(false);
            });
        }
    }, [userData]);

    return (
        // TODO check if (username === userLogin) then use followers data from context
        <HomeLayout>
            {loading ? <Loading /> : <ListOfUsers followData={followersData} selected={'followers'} />}{' '}
        </HomeLayout>
    );
};

export default Followers;
