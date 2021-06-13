import React from 'react';

interface ClickButtonProps {
    heroIcon: JSX.Element;
    text: string;
    onClick: () => void;
}

const ClickButton: React.FC<ClickButtonProps> = ({ heroIcon, text, onClick }: ClickButtonProps) => {
    return (
        <button
            className="w-full p-1.5 justify-center flex bg-gray-200 rounded border hover:bg-white hover:border-gray-300 focus:outline-none shadow font-semibold"
            onClick={onClick}
        >
            <div className="flex flex-row items-center mx-auto space-x-3">
                <div className="w-4 h-4">{heroIcon}</div>
                <p className="text-sm">{text}</p>
            </div>
        </button>
    );
};

export default ClickButton;
