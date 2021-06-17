import React from 'react';
import HomeLayout from '../layouts/MainLayout';
import SVG from '../assets/fixing_bugs.svg';

const Notifications: React.FC = () => {
    return (
        <HomeLayout>
            <div className="p-8 my-20 text-center block">
                <img src={SVG} alt="In the Works" />
                <h1 className="text-3xl font-medium my-4">Currently in development</h1>
            </div>
        </HomeLayout>
    );
};

export default Notifications;
