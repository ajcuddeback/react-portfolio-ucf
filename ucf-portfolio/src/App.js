import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import components
import Intro from './components/Intro';
import Header from './components/Header';
import Resume from './components/Resume';
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
    <Router>
      <div className="App">
        <Intro />
        <GlobalStyle />
        <Header navElements={navElements} setNavElements={setNavElements} />
        <Switch>
          <Route exact path='/react-portfolio-ucf/' component={About}></Route>
          <Route path='/react-portfolio-ucf/about' component={About}></Route>
          <Route  path='/react-portfolio-ucf/works' component={Works}></Route>
          <Route  path='/react-portfolio-ucf/contact' component={Contact}></Route>
          <Route  path='/react-portfolio-ucf/resume' component={Resume}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
