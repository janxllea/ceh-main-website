import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services'
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;