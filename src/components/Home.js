import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer';
import BreweriesContainer from '../containers/BreweriesContainer';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Louisiana Craft Brewery Finder</h1>
                 <h3>Here you can find all the craft breweries located in the entire state of Louisiana and see reviews from patrons.</h3>
                 
                <MapContainer />
                <BreweriesContainer/>
            </div>
        );
    }
}

export default Home;
