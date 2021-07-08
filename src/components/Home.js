import React from 'react'
import Beers from '../images/nola beers.png'


const Home = () => {
    return (
        <div className="container">
            <h1>Brews On The Bayou</h1>
            <h1>Welcome to the Louisiana Craft Brewery Finder</h1>
            <h3>The pelican state is home to 30 breweries, each offering unique and delicious brews that have become a staple in the local culture.</h3>
            <h4>You're bound to find a can of Urban South's Paradise Park at a crawfish boil, or a can of Gnarly Barley's Jucifer in someone's hand during Mardi Gras.  </h4>
            <img src={Beers} alt="urban south beers" width="950" height="475" className="center"></img>                 
                        
        </div>
    )
}


// 1 stateless
export default Home;
