import { ThemeProvider } from './contexts/ThemeContext';
import { FontSizeProvider } from './contexts/FontSizeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <div className="min-vh-100" style={{ transition: 'all 0.3s ease' }}>
          <Header />
          <main>
            <Hero />
            <About />
            <Speakers />
            <Schedule />
            <Gallery />
            <Sponsors />
            <Contact />
            <ChatWidget />
          </main>
          <Footer />
        </div>
      </FontSizeProvider>
    </ThemeProvider>
  );
}

export default App;
