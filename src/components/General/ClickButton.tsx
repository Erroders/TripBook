import React from 'react';

interface ClickButtonProps {
    heroIcon?: JSX.Element;
    text: string;
    onClick: () => void;
    color?: string;
}

const ClickButton: React.FC<ClickButtonProps> = ({ heroIcon, text, onClick, color }: ClickButtonProps) => {
    return (
        <button
            className={`w-full p-1.5 justify-center flex rounded hover:bg-white hover:border-gray-300 focus:outline-none shadow font-semibold ${
                color ? color : 'bg-gray-200'
            }`}
            onClick={onClick}
        >
            <div className="flex flex-row items-center mx-auto space-x-3">
                {heroIcon && <div className="w-4 h-4">{heroIcon}</div>}
                <p className="text-sm">{text}</p>
            </div>
        </button>
    );
};

export default ClickButton;
