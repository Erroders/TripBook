import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useUserContext } from '../contexts/LoginedUserContext';
import LoadingContext from '../contexts/LoadingContext';
import { getCurrentTrip } from '../utils/controller/TripController';

const AddView: React.FC = () => {
    const { user } = useUserContext();
    const history = useHistory();
    const { setLoading } = useContext(LoadingContext);

    useEffect(() => {
        if (history.action == 'POP') {
            history.goBack();
        } else {
            if (user?.username) {
                getCurrentTrip(user?.username).then((currentTrip) => {
                    if (currentTrip) {
                        history.push(`/user/${user.username}/${currentTrip}`);
                    } else {
                        history.push('/createTrip');
                    }
                });
            }
        }

        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    return <></>;
};

export default AddView;
