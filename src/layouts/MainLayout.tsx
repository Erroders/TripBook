import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import HomeFeed from '../views/HomeFeed';
import UserProfile from '../views/UserProfile';
import { useLocation } from 'react-router-dom';
import AddView from '../views/AddView';
import Explore from '../views/Explore';
import Notifications from '../views/Notifications';

interface Props {
    children?: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }: Props) => {
    const { pathname } = useLocation();
    const view = () => {
        switch (pathname.slice(1)) {
            case 'home':
                return <HomeFeed />;
                break;
            case 'explore':
                return <Explore />;
                break;
            case 'add':
                return <AddView />;
                break;
            case 'notifications':
                return <Notifications />;
                break;
            case 'profile':
                return <UserProfile />;
                break;
            default:
                return <HomeFeed />;
                break;
        }
    };
    return (
        <div className="flex flex-col mx-auto md:w-2/3 lg:w-1/3 relative min-h-screen">
            <Header />
            <main className="min-h-screen">{children ? children : view()}</main>
            <Footer selectedTab={pathname.slice(1)} />
        </div>
    );
};

export default HomeLayout;
