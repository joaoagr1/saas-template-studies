import CallToAction from "./components/call-to-action.jsx";
import FAQ from "./components/faq.jsx";
import Features from "./components/features.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Nav from "./components/nav.jsx";
import Plans from "./components/plans.jsx";
import SubHero from "./components/sub-hero.jsx";

export default function LandingPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <SubHero />
        <Features />
        <Plans />
        <CallToAction />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
