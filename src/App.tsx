import { Description, Header, Hero, Information } from "./components";

export function App() {
  return (
    <>
      <Header />
      <main className="bg-dark100">
        <Hero />

        <Information />

        <Description />
      </main>
    </>
  );
}
