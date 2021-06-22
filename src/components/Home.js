import React, { Component } from 'react';
import MapContainer from '../containers/MapContainer';

class Home extends Component {
    render() {
        return (
            <div>
                 <h1>Laissez Les Bon Temps Rouler</h1>
                 <p>Louisiana may not have always been known for their craft brewing scene, but we've always known how to get together and drink. </p>
                 <p>Abita Brewery, the first craft brewery in Louisiana, led the surge in the state.</p>
                 <p>Now Louisiana is home to thirty craft breweries spread out all over the state.</p>
                 <p>Craft beers have become a staple at our crawfish boils, Mardi Gras parties, and even our go to beers while sipping at home. </p>
                <MapContainer />
            </div>
        );
    }
}

export default Home;
