import React, { useState } from 'react';
import { TABS } from '../assets/themes/variables';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import HomeFeed from '../views/HomeFeed';
import UserProfile from '../views/UserProfile';

const HomeLayout: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<TABS>(TABS.FEED);

    const view = () => {
        if (currentTab === TABS.FEED) {
            return <HomeFeed />;
        } else if (currentTab === TABS.EXPLORE) {
            return <HomeFeed />;
        } else if (currentTab === TABS.CREATE) {
            return <HomeFeed />;
        } else if (currentTab === TABS.NOTIFICATIONS) {
            return <HomeFeed />;
        } else if (currentTab === TABS.PROFILE) {
            return <UserProfile />;
        } else {
            return <HomeFeed />;
        }
    };

    return (
        <div className="flex flex-col mx-auto md:w-2/3 lg:w-1/3 relative min-h-screen">
            <Header />

            <main className="min-h-screen">{view()}</main>

            <Footer selectedTab={currentTab} setSelectedTab={setCurrentTab} />
        </div>
    );
};

export default HomeLayout;
