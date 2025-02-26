"use client"

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CustomHook from './customHook';
import UserInputHooks from './UserInputHooks';
import Memoization from './memoization';
import HandlingKeyboard from './handlingKeyboard';
import SearchDebounce from './searchDebounce';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Counter',
        children: <CustomHook />,
    },
    {
        key: '2',
        label: 'User Input',
        children: <UserInputHooks />,
    },
    {
        key: '3',
        label: 'Memoization',
        children: <Memoization />,
    },
    {
        key: '4',
        label: 'Sum Calculation',
        children: <HandlingKeyboard />,
    },
    {
        key: '5',
        label: 'Search Debounce',
        children: <SearchDebounce />,
    },
];

export default function CustomTabsHooks() {
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={() => onChange} />
    )
}