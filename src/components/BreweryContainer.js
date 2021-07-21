import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBreweries } from '../actions/breweriesActions'
import Breweries from './Breweries';
import BreweryShow from './BreweryShow'

import {
    // BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

class BreweryContainer extends Component {

   

    componentDidMount() {
        this.props.fetchBreweries()
        console.log(1)
    }

    render() {
        // console.log(this.props)
        return (
            <>
                <Switch>
                    <Route exact path="/breweries">
                        <Breweries/>
                    </Route>
                    <Route  path="/breweries/:id" component={(routeData) => {
                        // console.log(routeData)
                        const id = parseInt(routeData.match.params.id)
                        const brewery = this.props.breweries.find(i => i.id === id)

                        return !!brewery ?  <BreweryShow  brewery={brewery} id={id}/> : <div>404 page not found</div>

                     }
                    } />

                    
                </Switch>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}



export default connect(mapStateToProps, { fetchBreweries })(BreweryContainer);
