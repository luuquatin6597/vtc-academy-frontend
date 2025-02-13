import React from 'react';

interface ListItemProps {
    item: string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    return <li>{item}</li>;
};

export default ListItem;