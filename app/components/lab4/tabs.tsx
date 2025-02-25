import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SimpleButton from './simpleButton';
import InputHandling from './inputHandling';
import MouseEvents from './mouseEvents';
import KeyboardEvents from './keyboardEvents';
import Counter from './conter';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Simple Button',
        children: <SimpleButton />,
    },
    {
        key: '2',
        label: 'Input Handling',
        children: <InputHandling />,
    },
    {
        key: '3',
        label: 'Mouse Events',
        children: <MouseEvents />,
    },
    {
        key: '4',
        label: 'Keyboard Events',
        children: <KeyboardEvents />,
    },
    {
        key: '5',
        label: 'Counter',
        children: <Counter />,
    },
];

export default function CustomTabs() {
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={() => onChange} />
    )
}