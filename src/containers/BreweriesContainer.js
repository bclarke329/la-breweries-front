import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBreweries } from '../actions/breweriesActions'

class BreweriesContainer extends Component {
    render(){
        return (
           <div>
                Brewery Container
            </div>
        );
    }
}



export default connect(null, { fetchBreweries })(BreweriesContainer)
