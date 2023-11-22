import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services'
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;