import React from 'react';

const HeavyComponent: React.FC = () => {
    return (
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        </div>
    );
};

export default HeavyComponent;