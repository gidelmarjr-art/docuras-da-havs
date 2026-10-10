import Header from './components/Header';
import Hero from './sections/Hero/Hero';
import Marquee from './sections/Marquee/Marquee';
import Categories from './sections/Categories/Categories';
import About from './sections/About/About';
import Gallery from './sections/Gallery/Gallery';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import InstagramCTA from './sections/InstagramCTA/InstagramCTA';
import Footer from './sections/Footer/Footer';

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