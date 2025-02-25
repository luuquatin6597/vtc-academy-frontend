import React from 'react';

interface ListItemProps {
    item: string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    return (
        <>
            <p>{item}</p>
        </>
    );
};

export default ListItem;