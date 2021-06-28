import React, { Component } from 'react';
import logos from '../images/brewery_logos.png'
import { connect } from 'react-redux'
import { fetchBreweries } from '../actions/breweriesActions'


///parent component = read store and contain list that will have breweries 

class AllBreweries extends Component {

    componentDidMount() { ///will be called auto when the componet is mounting for the first time 
        // console.log(this.props.breweries)
        this.props.fetchBreweries()

    }

    // breweries = () => {
    // }

    render() {
        const breweries = this.props.breweries.map(brew => <li key={brew.id}>{brew.name}</li>)
        console.log(this.props.breweries)
        return (
            <div>
                <img src={logos} alt="brewery_logos" id="brew-logos"/>
                <h1>View All Breweries</h1>
                <ul>
                    {/* { this.props.breweries.map(brew => <li key={brew.id}>{brew.name}</li>) } */}
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


