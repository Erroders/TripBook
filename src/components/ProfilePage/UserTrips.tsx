import { Link } from 'react-router-dom';
import { TRIP_DATA } from '../../models/TripData';
import React from 'react';

interface Props {
    trips: TRIP_DATA[];
}

const UserTrips: React.FC<Props> = ({ trips }: Props) => {
    return (
        <div className="pb-14 grid grid-cols-3 gap-0.5 p-0.5">
            {trips.map((trip) => {
                return (
                    <div key={trip.id} className="flex justify-center">
                        <Link to={`/trip/${trip.id}`} key={trip.id}>
                            <img src={trip.coverImage} alt="Trip Cover Image" className="object-cover h-full w-full" />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default UserTrips;
