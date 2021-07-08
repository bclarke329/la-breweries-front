import React, { Component } from 'react';
import ReviewFormsContainer from '../containers/ReviewsFormContainer'
import Reviews from './Reviews';

// import { connect } from 'react-redux';
// import Breweries from './Breweries';
// import { fetchBreweries } from '../actions/breweriesActions';




const BreweryShow = (props) => {
   return (
       <div>
           <h1>{props.brewery.name}</h1>
            <h2>{props.brewery.address}</h2>
            <h2>{props.brewery.city}, LA</h2>
            <h2>{props.brewery.parish} Parish</h2>
            <hr></hr>

            <h3>Leave A Review</h3>
                <ReviewFormsContainer id={props.id}/>
            
            <Reviews id={props.id}/>
                    

       </div>
   )
    
}





//4 stateless
export default BreweryShow;
