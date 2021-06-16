import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useUserContext } from '../contexts/LoginedUserContext';
import { getCurrentTrip } from '../utils/controller/TripController';

const AddView: React.FC = () => {
    const { user } = useUserContext();
    const history = useHistory();

    useEffect(() => {
        console.log(history.action);

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
    }, []);

    return <></>;
};

export default AddView;
