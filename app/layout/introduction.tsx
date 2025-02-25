import dynamic from 'next/dynamic';

// Sử dụng dynamic để lazy load các component
const Title = dynamic(() => import('../components/lab1/title'));
const Text = dynamic(() => import('../components/lab1/text'));
const List = dynamic(() => import('../components/lab1/list'));

export default function Introduction() {
    const title = "Welcome to NextJS!";
    const text = "Welcome to the world of NextJS!";
    const items = ["Item 1", "Item 2", "Item 3"];
    return (
        <div>
            <Title text={title} />
            <Text text={text} />
            <List items={items} />
        </div>
    )
}