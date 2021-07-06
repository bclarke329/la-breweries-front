import React, { Component } from 'react';
import ReviewFormsContainer from '../containers/ReviewsFormContainer'
import { connect } from 'react-redux';
import Breweries from './Breweries';
import { fetchBreweries } from '../actions/breweriesActions';




const BreweryShow = (props) => {
   return (
       <div>
           <h1>{props.brewery.name}</h1>
            <h2>{props.brewery.address}</h2>
            <h2>{props.brewery.city}, LA</h2>


            <h3>Leave A Review</h3>
                <ReviewFormsContainer />
            
       </div>
   )
    
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}



export default connect(mapStateToProps, {fetchBreweries})(BreweryShow);
