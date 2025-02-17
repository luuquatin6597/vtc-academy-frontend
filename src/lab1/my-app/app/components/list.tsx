"use client";

import React, { useEffect, useState } from 'react';
import ListItem from './list-item';
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import('./HeavyComponent'));

interface ListProps {
    items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
    const [data, setData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setData(items);
        setIsLoading(false);
    }, []);

    return (
        <ul>
            {isLoading ? (
                <HeavyComponent />
            ) : (
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data.map((item, index) => (
                            <li key={index}>
                                <ListItem item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </ul>
    );
};

export default List;