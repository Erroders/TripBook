import { Link } from 'react-router-dom';
import { TRIP_DATA } from '../../models/TripData';
import React from 'react';

interface Props {
    trips: TRIP_DATA[];
}

const UserTrips: React.FC<Props> = ({ trips }: Props) => {
    return (
        <div className="p-2 grid grid-cols-3 gap-1">
            {trips.map((trip) => {
                return (
                    <Link to={`/trip/${trip.id}`} key={trip.id}>
                        <div className="flex justify-center">
                            <img
                                src={trip.coverImage}
                                alt="Trip Cover Image"
                                className="h-tripCoverImageProfileheight w-tripCoverImageProfilewidth object-cover"
                            />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default UserTrips;
