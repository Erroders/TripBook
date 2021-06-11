import React from 'react';
import { Link } from 'react-router-dom';

interface ITripsProps {
    coverImage: string;
    tripId: string;
}

const UserTrips: React.FC<ITripsProps> = ({ coverImage, tripId }: ITripsProps) => {
    console.log(tripId);

    return (
        <div className="py-5 px-2 grid grid-cols-3 gap-1">
            <Link to={`/trip/${tripId}`}>
                {/* Cover Image */}
                <div className="flex justify-center">
                    <img src={coverImage} alt="Trip Cover Image" className="h-full w-full object-cover" />
                </div>
            </Link>
            <Link to={`/trip/${tripId}`}>
                {/* Cover Image */}
                <div className="flex justify-center">
                    <img src={coverImage} alt="Trip Cover Image" className="h-full w-full object-cover" />
                </div>
            </Link>
            <Link to={`/trip/${tripId}`}>
                {/* Cover Image */}
                <div className="flex justify-center">
                    <img src={coverImage} alt="Trip Cover Image" className="h-full w-full object-cover" />
                </div>
            </Link>
            <Link to={`/trip/${tripId}`}>
                {/* Cover Image */}
                <div className="flex justify-center">
                    <img src={coverImage} alt="Trip Cover Image" className="h-full w-full object-cover" />
                </div>
            </Link>
            <Link to={`/trip/${tripId}`}>
                {/* Cover Image */}
                <div className="flex justify-center">
                    <img src={coverImage} alt="Trip Cover Image" className="h-full w-full object-cover" />
                </div>
            </Link>
        </div>
    );
};

export default UserTrips;
