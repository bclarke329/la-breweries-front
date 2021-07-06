import React, { Component } from 'react';
import ReviewFormsContainer from '../containers/ReviewsFormContainer'
import { connect } from 'react-redux';



const BreweryShow = (props) => {
   return (
       <div>
           <h1>show</h1>
           
                <ReviewFormsContainer />
            
       </div>
   )
    
}



export default BreweryShow;
