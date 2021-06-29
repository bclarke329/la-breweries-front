import React, { Component } from 'react';
import logos from '../images/brewery_logos.png'
import { connect } from 'react-redux'
import { fetchBreweries } from '../actions/breweriesActions'
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link
  } from "react-router-dom";


///component that renders the "view all" path and list of all breweries 

class AllBreweries extends Component {

    componentDidMount() { ///will be called auto when the componet is mounting for the first time 
        // console.log(this.props.breweries)
        this.props.fetchBreweries()

    }

    
    render() {
        console.log(this.props)
        const breweries = this.props.breweries.map(brew => <li key={brew.id}><Link>{brew.name}</Link></li>)
        // console.log(this.props.breweries)
        return (
            <div>
                <img src={logos} alt="brewery_logos" width="950" height="450" className="center"/>
                <h1>All Breweries</h1>
                <ul className='brew-list'> 
                    {breweries}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}


export default connect(mapStateToProps, { fetchBreweries })(AllBreweries)


