import React, { useState } from 'react';
import UserComponent from '../components/Explore/UserComponent';
import HomeLayout from '../layouts/MainLayout';
import { USER_DATA } from '../models/UserData';

const Explore: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [followerData, setFollowerData] = useState<Array<USER_DATA>>([]);

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            // TODO: Get data from firebase
            console.log('Enter Key pressed');
            false && setFollowerData([]);
        }
    };

    return (
        <HomeLayout>
            <div className="p-3">
                <input
                    type="text"
                    name="searchQuery"
                    id="searchQuery"
                    className="w-full p-2 border outline-none rounded-md text-center"
                    placeholder="Search"
                    value={searchQuery}
                    onKeyDown={handleSearch}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="px-3">
                {followerData.length > 0 ? (
                    followerData.map((follower, index) => <UserComponent key={index} follower={follower} />)
                ) : (
                    <h1 className="p-3 text-center text-xl font-light text-gray-500">NO RESULTS</h1>
                )}
            </div>
        </HomeLayout>
    );
};

export default Explore;
