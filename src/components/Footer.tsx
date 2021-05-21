import { faHeart, faPlusSquare, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TABS } from '../assets/themes/variables';

interface FooterProps {
    selectedTab: TABS;
    setSelectedTab: React.Dispatch<React.SetStateAction<TABS>>;
}

const Footer: React.FC<FooterProps> = ({ selectedTab, setSelectedTab }: FooterProps) => {
    console.log(selectedTab, setSelectedTab);

    return (
        <footer className="grid grid-cols-5 bg-primary-gray h-header text-xl font-semibold font-display w-full sticky bottom-0 z-50">
            <div
                className={`text-center self-center ${
                    selectedTab === TABS.FEED ? 'text-primary-blue' : 'text-primary-black'
                }`}
                onClick={() => setSelectedTab(TABS.FEED)}
            >
                <FontAwesomeIcon icon={faHome} className="text-center" />
            </div>

            <div
                className={`self-center text-center ${
                    selectedTab === TABS.EXPLORE ? 'text-primary-blue' : 'text-primary-black'
                }`}
                onClick={() => setSelectedTab(TABS.EXPLORE)}
            >
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div
                className={`self-center text-center ${
                    selectedTab === TABS.CREATE ? 'text-primary-blue' : 'text-primary-black'
                }`}
                onClick={() => setSelectedTab(TABS.CREATE)}
            >
                <FontAwesomeIcon icon={faPlusSquare} />
            </div>
            <div
                className={`self-center text-center ${
                    selectedTab === TABS.NOTIFICATIONS ? 'text-primary-blue' : 'text-primary-black'
                }`}
                onClick={() => setSelectedTab(TABS.NOTIFICATIONS)}
            >
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <div
                className={`self-center text-center ${
                    selectedTab === TABS.PROFILE ? 'text-primary-blue' : 'text-primary-black'
                }`}
                onClick={() => setSelectedTab(TABS.PROFILE)}
            >
                <FontAwesomeIcon icon={faUserCircle} />
            </div>
        </footer>
    );
};

export default Footer;
