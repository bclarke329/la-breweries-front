import React from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
// import Breweries from './components/Breweries'
import Navbar from './components/Navbar'
// import BreweryShow from './components/BreweryShow'
// import { connect } from 'react-redux'
// import { fetchBreweries } from './actions/breweriesActions'
import BreweryContainer from './components/BreweryContainer'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="wrapper"> 
      <Router>
        <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/breweries" component={(routeInfo) => <BreweryContainer routeData={routeInfo} />} />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}



export default App;