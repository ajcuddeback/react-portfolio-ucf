import React from 'react';

// Import components
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global Style
import GlobalStyle from './components/GlobalStyles';

import './styles.css'

function App() {
  return (
    <div className="App">
      <Intro />
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
