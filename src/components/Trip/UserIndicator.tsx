import React from 'react';

const UserIndicator: React.FC = () => {
    return (
        <>
            <div className="flex mt-2">
                <a href="#" className="flex">
                    <img
                        src="http://picsum.photos/64"
                        alt=""
                        className="h-userProfilePicSmall rounded-full border border-primary-blue"
                    />
                    <span className="my-auto text-lg font-semibold ml-2">unicef</span>
                </a>
            </div>
        </>
    );
};

export default UserIndicator;
