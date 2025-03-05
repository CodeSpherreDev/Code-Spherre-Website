import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Members } from './components/Members';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Members />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;