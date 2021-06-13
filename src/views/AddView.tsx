import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { getCurrentTrip } from '../utils/controller/TripController';

const AddView: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        console.log(history.action);

        if (history.action == 'POP') {
            history.goBack();
        } else {
            const user = 'akathecoder';
            getCurrentTrip(user).then((currentTrip) => {
                if (currentTrip) {
                    history.push(`/user/${user}/${currentTrip}`);
                } else {
                    history.push('/createTrip');
                }
            });
        }
    }, []);

    return <></>;
};

export default AddView;
