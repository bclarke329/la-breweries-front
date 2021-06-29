import React from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import AllBreweries from './components/AllBreweries'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="wrapper"> 
      <Router>
       <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/allbreweries" component={(routeInfo) => <AllBreweries routeData={routeInfo} />} />
      </Router>
    </div>
  );
}

export default App;
