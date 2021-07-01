import React from 'react'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Breweries from './components/Breweries'
import Navbar from './components/Navbar'
import BreweryShow from './components/BreweryShow'

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
          {/* <Route  path="/breweries" component={(routeInfo) => <Breweries routeData={routeInfo} />} /> */}
          <Route path="/breweries/:id" component={(routeData) => {
            // console.log(routeData)
            const id = parseInt(routeData.match.params.id)
            console.log(id)
            // const brew = this.state.brewery.find(i => i.id === id)
            return <BreweryShow />
            } 
      }/>
      </Router>
    </div>
  );
}

export default App;