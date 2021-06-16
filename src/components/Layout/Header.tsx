import React from 'react';

const index: React.FC = () => {
    return (
        <header className="flex bg-primary-gray h-header text-xl font-semibold font-display w-full sticky top-0 z-50 border-b border-gray-300 p-3">
            <img src="/logo-min.png" alt="TripBook Logo" className="mx-auto h-full" />
        </header>
    );
};

export default index;
