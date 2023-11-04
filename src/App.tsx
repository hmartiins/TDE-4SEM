import {
  ContactUs,
  Description,
  Footer,
  Header,
  Hero,
  Information,
} from "./components";
import {
  AvarageScoreByRegion,
  GenderDistribution,
  InvestmentAndAverageRating,
  RegionPercentage,
} from "./components/Charts";

export function App() {
  return (
    <>
      <Header />
      <main className="bg-dark100">
        <Hero />

        <Information />

        <Description />

        <AvarageScoreByRegion />
        <GenderDistribution />
        <InvestmentAndAverageRating />
        <RegionPercentage />

        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
