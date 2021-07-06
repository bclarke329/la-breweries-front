import React, { Component } from 'react';
import logos from '../images/brewery_logos.png'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Breweries extends Component {
    render() {

        const breweries = this.props.breweries.map(brew => <li key={brew.id}><Link to={`/breweries/${brew.id}`}>{brew.name}</Link></li>)

        return (
            
            <div className="brew-container">
                <img src={logos} alt="brewery_logos" width="950" height="450" className="center"/>
                <h1>All Breweries</h1>
                <ul className='brew-list'> 
                    {breweries}
                </ul>
            </div>
        );
    }
}


export default connect((state) => {
    return {breweries: state.breweries}
})(Breweries);