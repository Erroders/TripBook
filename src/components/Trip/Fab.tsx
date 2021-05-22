import React from 'react';

interface FabProps {
    scrollTopDiv: React.RefObject<HTMLInputElement>;
}

const FAB: React.FC<FabProps> = ({ scrollTopDiv }: FabProps) => {
    return (
        <div
            className="fixed bg-primary-text-gray bottom-6 right-6 z-50 rounded-full flex justify-center bg-opacity-70 text-primary-white"
            style={{
                height: '12vw',
                width: '12vw',
            }}
            onClick={() =>
                console.log(
                    scrollTopDiv.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start',
                    }),
                )
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </div>
    );
};

export default FAB;
