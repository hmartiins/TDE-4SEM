import {
  ContactUs,
  Description,
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

        <ContactUs />

        <AvarageScoreByRegion />
        <GenderDistribution />
        <InvestmentAndAverageRating />
        <RegionPercentage />
      </main>
    </>
  );
}
