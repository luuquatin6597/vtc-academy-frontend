import List from "./components/list";

export default function Home() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>NextJS with JSX</h1>
          <p>Welcome to the world of NextJS!</p>
          <List items={items} />
        </div>
      </main>
    </div>
  );
}
