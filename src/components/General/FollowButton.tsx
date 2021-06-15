import React from 'react';
import { CheckCircleIcon as CheckCircleIcon1 } from '@heroicons/react/solid';
import { CheckCircleIcon as CheckCircleIcon0 } from '@heroicons/react/outline';
import { userFollow, userUnfollow } from '../../utils/controller/UserController';

interface Props {
    username: string;
}

const FollowButton: React.FC<Props> = ({ username }: Props) => {
    // const userLogin = 'nonitmittal';

    console.log(username);
    // TODO:  get the followStatus from the login User Info (useContext)
    // loginUserIngo.followers/followings[].check(this.username) ? true/false
    const followings = ['akathecoder', 'rg12301'];
    const follow = Boolean(followings.find((user) => user === username));

    return (
        <div>
            {follow ? (
                <button
                    className="w-full py-1.5 px-3 justify-center flex bg-gray-100 rounded border hover:bg-gray-200 hover:border-gray-200 focus:outline-none shadow font-semibold"
                    onClick={() => {
                        userUnfollow('nonitmittal', username);
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
                        userFollow('nonitmittal', username);
                    }}
                >
                    <div className="flex flex-row items-center mx-auto space-x-3">
                        <CheckCircleIcon0 className="w-4 h-4" />
                        <p className="text-sm">Follow</p>
                    </div>
                </button>
            )}
        </div>
    );
};

export default FollowButton;
