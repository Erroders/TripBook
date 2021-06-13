import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    heroIcon: JSX.Element;
    link: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ heroIcon, link, text }: ButtonProps) => {
    console.log(link);

    return (
        <Link
            to={link}
            className="w-full p-1.5 justify-center flex bg-gray-200 rounded border hover:bg-white hover:border-gray-300 focus:outline-none shadow font-semibold"
        >
            <div className="flex flex-row items-center mx-auto space-x-3">
                <div className="w-4 h-4">{heroIcon}</div>
                <p className="text-sm">{text}</p>
            </div>
        </Link>
    );
};

export default Button;
