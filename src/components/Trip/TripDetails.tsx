import fromnow from 'fromnow';
import React from 'react';

interface TripDetailsProps {
    tripDetails: string;
    lastUpdated: Date;
}

const TripDetails: React.FC<TripDetailsProps> = ({ tripDetails, lastUpdated }: TripDetailsProps) => {
    return (
        <div className="px-4 py-8">
            <p className="text-lg font-display">{tripDetails}</p>
            <p className="my-2 font-display text-primary-text-gray">
                {'Last updated ' +
                    fromnow(lastUpdated, {
                        max: 1,
                        suffix: true,
                    })}
            </p>
            <div className="border-primary-black w-8 border-t my-4" />
        </div>
    );
};

export default TripDetails;
