import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TABS } from '../../assets/themes/variables';
import { useUserContext } from '../../contexts/LoginedUserContext';
interface FooterProps {
    selectedTab: string;
}

const Footer: React.FC<FooterProps> = ({ selectedTab }: FooterProps) => {
    const [currentTab, setCurrentTab] = useState<TABS>(TABS.FEED);
    const { user } = useUserContext();

    useEffect(() => {
        if (selectedTab === 'home') {
            setCurrentTab(TABS.FEED);
        } else if (selectedTab === 'explore') {
            setCurrentTab(TABS.EXPLORE);
        } else if (selectedTab === 'add') {
            setCurrentTab(TABS.CREATE);
        } else if (selectedTab === 'notifications') {
            setCurrentTab(TABS.NOTIFICATIONS);
        } else if (selectedTab.startsWith('profile')) {
            setCurrentTab(TABS.PROFILE);
        } else {
            setCurrentTab(TABS.FEED);
        }
    }, [selectedTab]);

    return (
        <footer className="grid grid-cols-5 bg-primary-gray h-header text-xl font-semibold font-display md:w-2/3 lg:w-1/3 w-full fixed bottom-0 z-50 border-t border-gray-300">
            <div className={`text-center self-center`}>
                <Link to={'/home'}>
                    {currentTab === TABS.FEED ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    )}
                </Link>
            </div>

            <div className={`self-center text-center `}>
                <Link to={'/explore'}>
                    {currentTab === TABS.EXPLORE ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    )}
                </Link>
            </div>

            <div className={`self-center text-center`}>
                <Link to="/add">
                    {currentTab === TABS.CREATE ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                </Link>
            </div>

            <div className={`self-center text-center`}>
                <Link to="/notifications">
                    {currentTab === TABS.NOTIFICATIONS ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    )}
                </Link>
            </div>

            <div className={`self-center text-center`}>
                <Link to={`/profile/${user?.username}`}>
                    {currentTab === TABS.PROFILE ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
