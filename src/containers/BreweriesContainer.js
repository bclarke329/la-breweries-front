import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBreweries } from '../actions/breweriesActions'
import ReviewsFormContainer from './ReviewsFormContainer';

class BreweriesContainer extends Component {

    state = {
        breweries: []
    }

    componentDidMount() {
        this.props.fetchBreweries()

    }

    
    render(){
        return (
           <div>
                Brewery Container
                <ReviewsFormContainer />
                
            </div>
        );
    }
}





export default connect(null, { fetchBreweries })(BreweriesContainer)
