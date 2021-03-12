import React, {useState} from 'react';

// Import components
import Intro from './components/Intro';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global Style
import GlobalStyle from './components/GlobalStyles';

import './index.css';
import data from './navElements';

function App() {
  const [navElements, setNavElements] = useState(data());

  return (
    <div className="App">
      <Intro />
      <GlobalStyle />
      <Header navElements={navElements} setNavElements={setNavElements} />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
