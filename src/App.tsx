import { Header, Hero } from "./components";

export function App() {
  return (
    <>
      <Header />
      <main className="bg-dark100 h-full">
        <Hero />
      </main>
    </>
  );
}
