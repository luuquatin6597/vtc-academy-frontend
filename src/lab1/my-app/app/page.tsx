import dynamic from 'next/dynamic';

// Sử dụng dynamic để lazy load các component
const Title = dynamic(() => import('./components/title'));
const Text = dynamic(() => import('./components/text'));
const List = dynamic(() => import('./components/list'));

const Home = async () => {
  const title = "Welcome to NextJS!";
  const text = "Welcome to the world of NextJS!";
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Title text={title} />
          <Text text={text} />
          <List items={items} />
        </div>
      </main>
    </div>
  );
};

export default Home;