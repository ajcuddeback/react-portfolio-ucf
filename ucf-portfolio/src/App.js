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
          <Route exact path='/' component={About}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/works' component={Works}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/resume' component={Resume}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
