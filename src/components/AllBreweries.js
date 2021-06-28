import React, { Component } from 'react';
// import logos from '../images/brewery_logos.png'
import { connect } from 'react-redux'
import { fetchBreweries } from '../actions/breweriesActions'

import BreweriesContainer from '../containers/BreweriesContainer'

///parent component = read store and contain list that will have breweries 

class AllBreweries extends Component {

    componentDidMount() { ///will be called auto when the componet is mounting for the first time 
        // console.log(this.props.breweries)
        this.props.fetchBreweries()

    }

    render() {
        console.log(this.props.breweries)
        return (
            <div>
                {/* <img src={logos} alt="brewery_logos" id="brew-logos"/> */}
                <h1>View All Breweries</h1>
                <BreweriesContainer />
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


