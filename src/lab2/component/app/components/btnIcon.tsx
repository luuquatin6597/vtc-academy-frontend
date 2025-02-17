import * as React from 'react';

interface BtnIconProps {
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    children: React.ReactNode;
}

const BtnIcon: React.FC<BtnIconProps> = ({ onClick, children, type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
        >
            {children}
        </button>
    );
}

export default BtnIcon;