import Header from './components/Header';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Categories from './sections/Categories';
import About from './sections/About';
import Gallery from './sections/Gallery';
import HowItWorks from './sections/HowItWorks';
import InstagramCTA from './sections/InstagramCTA';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <About />
        <Gallery />
        <HowItWorks />
        <InstagramCTA />
      </main>
      <Footer />
    </>
  );
}
