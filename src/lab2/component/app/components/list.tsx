import * as React from 'react';
import Item from './item';

interface ListProps {
    items: { name: string; category: string }[];
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item, index) => (
                <li key={index} className={index >= items.length - 1 ? "pt-3 pb-0 sm:pt-4" : "py-3 sm:py-4"}>
                    <Item item={item} index={index} />
                </li>
            ))}
        </ul>
    );
};

export default List;
