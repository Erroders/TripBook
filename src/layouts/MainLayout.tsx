import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import { useLocation } from 'react-router-dom';

interface Props {
    children?: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }: Props) => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col mx-auto md:w-2/3 lg:w-1/3 relative min-h-screen">
            <Header />
            <main className="pb-header">{children}</main>
            <Footer selectedTab={pathname.slice(1)} />
        </div>
    );
};

export default HomeLayout;
