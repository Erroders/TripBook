import React from 'react';

const EndCredit: React.FC = () => {
    return (
        <div className="grid grid-cols-5 mb-6">
            <div className="col-span-2 pl-4 items-center flex">
                <hr className="border-t-2 border-primary-text-gray w-full" />
            </div>
            <div className="col-span-1 text-center uppercase text-lg text-primary-text-gray">END</div>
            <div className="col-span-2 pr-4 items-center flex">
                <hr className="border-t-2 border-primary-text-gray w-full" />
            </div>
        </div>
    );
};

export default EndCredit;
