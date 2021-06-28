import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import ReviewsFormContainer from './ReviewsFormContainer';

class BreweriesContainer extends Component {

    render(){

        const breweries = () => {
            return this.props.breweries.map(brew => <li key={brew.id}>{brew.name}</li>)
        }
        return (
           <div>
               <ul>
               {this.breweries}
               </ul>
            </div>
        );
    }
}




export default BreweriesContainer
