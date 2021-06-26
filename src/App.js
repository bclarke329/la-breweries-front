import React from 'react'
import Home from './components/Home'
import About from './components/About'
import AllBreweries from './components/AllBreweries'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
       <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/allbreweries" component={AllBreweries} />
      </Router>
    </div>
  );
}

export default App;
