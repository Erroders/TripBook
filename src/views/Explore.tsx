import { SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import UserComponent from '../components/Explore/UserComponent';
import HomeLayout from '../layouts/MainLayout';
import { USER_DATA } from '../models/UserData';
import { getUserByUsername, getUsersByName } from '../utils/controller/UserController';

const Explore: React.FC = () => {
    const [followerData, setFollowerData] = useState<USER_DATA[]>([]);
    const [searchByUsername, setSearchByUsername] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchStarted, setSearchStarted] = useState<boolean>(false);

    return (
        <HomeLayout>
            <div className="p-3">
                <div className="flex flex-row py-2 px-4 border rounded-md text-left">
                    {searchByUsername ? (
                        <>
                            <span className="font-extrabold font-sans">@ </span>
                            <input
                                type="text"
                                name="searchQuery"
                                id="searchQuery"
                                className="w-full outline-none focus:outline-none"
                                value={searchQuery}
                                onKeyDown={(e: any) => {
                                    setSearchStarted(true);
                                    if (e.key === 'Backspace') {
                                        setFollowerData([]);
                                    }
                                    setSearchStarted(true);
                                    if (e.key === 'Backspace' && e.target.value.length === 0) {
                                        setSearchStarted(false);
                                        setSearchByUsername(false);
                                    }

                                    if (e.key === 'Enter') {
                                        getUserByUsername(searchQuery).then((userData) => {
                                            userData ? setFollowerData([userData]) : setFollowerData([]);
                                        });
                                    }
                                }}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                }}
                                autoFocus
                            />
                        </>
                    ) : (
                        <input
                            type="text"
                            name="searchQuery"
                            id="searchQuery"
                            className="w-full outline-none focus:outline-none"
                            value={searchQuery}
                            placeholder="Search"
                            onKeyUp={(e: any) => {
                                setSearchStarted(true);
                                if (e.key === 'Backspace' && e.target.value.length === 0) {
                                    setFollowerData([]);
                                    setSearchStarted(false);
                                }
                                if (e.key === '@' && e.target.value.length === 1) {
                                    setSearchByUsername(true);
                                    setSearchQuery('');
                                }
                                if (e.key === ' ' || e.key === 'Enter') {
                                    getUsersByName(searchQuery).then((usersFound) => {
                                        if (usersFound.length !== 0) {
                                            setFollowerData(usersFound);
                                        }
                                    });
                                }
                            }}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                            autoFocus
                        />
                    )}
                </div>
            </div>
            <div className="px-3">
                {followerData.length > 0 ? (
                    followerData.map((follower, index) => <UserComponent key={index} follower={follower} />)
                ) : searchStarted ? (
                    <h1 className="mt-10 text-center font-semibold">Match not found 😢</h1>
                ) : (
                    <h1 className="mt-10 text-center font-semibold">
                        Start searching
                        <SearchIcon className="animate-spin h-4 w-4 inline mb-1 mx-2" />
                    </h1>
                )}
            </div>
        </HomeLayout>
    );
};

export default Explore;
