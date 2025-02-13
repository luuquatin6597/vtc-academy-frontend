import React from 'react';
import ListItem from './list-item';

interface ListProps {
    items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default List;