// import React, { Component } from 'react';
import ReviewFormsContainer from '../containers/ReviewsFormContainer'
// import Breweries from './Breweries';
// import { Link } from 'react-router-dom'

const BreweryShow = ({match, breweries}) => {
   return (
       <div>
           <h1>This a show page</h1>
                <ReviewFormsContainer />
       </div>
   )
    
}

export default BreweryShow;
