import { Link } from 'react-router-dom';
import { TRIP_DATA } from '../../models/TripData';
import { ViewGridAddIcon } from '@heroicons/react/outline';
import React from 'react';

interface Props {
    trips: TRIP_DATA[];
    username: string;
}

const UserTrips: React.FC<Props> = ({ trips, username }: Props) => {
    return trips.length === 0 ? (
        <div className="flex flex-col items-center space-y-3 my-20 pb-14  opacity-75">
            <div className=" p-5 rounded-full border border-black">
                <ViewGridAddIcon className="h-12 w-12" />
            </div>
            <p className="text-xl font-semibold">No Trips Yet</p>
        </div>
    ) : (
        <div className="pb-14 grid grid-cols-3 gap-0.5 p-0.5">
            {trips.map((trip, index) => {
                return (
                    <div key={trip.id ? trip.id : index} className="flex justify-center">
                        <Link to={`/user/${username}/${trip.id}`}>
                            <img
                                src={trip.coverImage}
                                alt="Trip Cover Image"
                                className="object-cover h-coverImageProfileHeight w-full 
                                hover:shadow-xl"
                            />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default UserTrips;
