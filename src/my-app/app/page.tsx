import List from "./components/list";
import Text from "./components/text";
import Title from "./components/title";

export default function Home() {
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
}
