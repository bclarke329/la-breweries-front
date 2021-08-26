import React from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
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
              <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}



export default App;