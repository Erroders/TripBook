import React, { useContext, useEffect, useState } from 'react';
import { CheckCircleIcon as CheckCircleIcon1 } from '@heroicons/react/solid';
import { CheckCircleIcon as CheckCircleIcon0 } from '@heroicons/react/outline';
import { userFollow, userUnfollow } from '../../utils/controller/UserController';
import { useUserContext } from '../../contexts/LoginedUserContext';
import LoadingContext from '../../contexts/LoadingContext';

interface Props {
    username: string;
}

const FollowButton: React.FC<Props> = ({ username }: Props) => {
    const [follow, setfollow] = useState<boolean>(false);
    const { user } = useUserContext();
    const { setLoading } = useContext(LoadingContext);

    useEffect(() => {
        return () => {
            setLoading && setLoading(true);
        };
    }, []);

    useEffect(() => {
        if (user) {
            const found = Object.keys(user.followings).includes(username);
            if (found) {
                setfollow(true);
            } else {
                setfollow(false);
            }
        }
        setLoading && setLoading(false);
    }, [user]);

    return (
        <div>
            {user?.username !== username &&
                (follow ? (
                    <button
                        className="w-full py-1.5 px-3 justify-center flex bg-gray-100 rounded border hover:bg-gray-200 hover:border-gray-200 focus:outline-none shadow font-semibold"
                        onClick={() => {
                            user && userUnfollow(user.username, username);
                        }}
                    >
                        <div className="flex flex-row items-center mx-auto space-x-3">
                            <CheckCircleIcon1 className="w-4 h-4" />
                            <p className="text-sm font-medium">Following</p>
                        </div>
                    </button>
                ) : (
                    <button
                        className="w-full py-1.5 px-3 justify-center flex bg-blue-500 rounded border hover:bg-blue-200 text-white hover:border-blue-400 hover:text-black focus:outline-none shadow font-semibold"
                        onClick={() => {
                            user && userFollow(user.username, username);
                        }}
                    >
                        <div className="flex flex-row items-center mx-auto space-x-3">
                            <CheckCircleIcon0 className="w-4 h-4" />
                            <p className="text-sm">Follow</p>
                        </div>
                    </button>
                ))}
        </div>
    );
};

export default FollowButton;
