import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import BentoGrid from './sections/BentoGrid';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-neon-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
