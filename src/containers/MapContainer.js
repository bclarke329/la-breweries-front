import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapContainer extends Component {

    state = {
        breweries: [
            {lat: 30.48226516322099, lng: -90.05496435764734},
            {lat: 30.39194311803251, lng: -91.92510585764899},
            {lat: 29.962807495756923, lng: -90.05723620183613},
            {lat: 31.12454937843532, lng: -92.06944954414301},
            {lat: 31.748645792137033, lng: -93.08733360180295},
            {lat: 30.432973545409546, lng: -90.03549165764821},
            {lat: 29.94021421988668, lng: -90.07188785950827},
            {lat: 30.177352731425795, lng: -93.20283450183226},
            {lat: 30.00264490941512, lng: -90.01910751717888},
            {lat: 32.5064614086503, lng: -92.11983299014702},
            {lat: 30.25551326780957, lng: -90.92144448648735},
            {lat: 30.497229929214413, lng: -90.47905874415467},
            {lat: 29.94819601898734, lng: -90.06499145950816},
            {lat: 32.48876492674752, lng: -93.7561754748039},
            {lat: 31.27090179578421, lng: -92.45141938646852},
            {lat: 30.483068910039318, lng: -90.470407446006},
            {lat: 29.920713964907158, lng: -90.08011428649343},
            {lat: 29.919890867112425, lng: -90.08169420183687},
            {lat: 30.36071899176309, lng: -90.0633063785463},
            {lat: 30.159265387835873, lng: -91.94847181532496},
            {lat: 29.960961359617023, lng: -90.03393635765683},
            {lat: 29.917311355229305, lng: -90.09826210183702},
            {lat: 30.392464517064447, lng: -91.05689523251526},
            {lat: 32.506957706342895, lng: -93.74419890972744},
            {lat: 30.027011293559145, lng: -90.02739999998387},
            {lat: 29.982663498773146, lng: -90.10524258649227},
            {lat: 30.432839292324065, lng: -91.18884326558734},
            {lat: 29.92987285603952, lng: -90.0665831195661},
            {lat: 32.53008913689116, lng: -92.63781187665418},
            {lat: 29.952472322328376, lng: -90.0973750827907}
        ]
    }

    displayPoints = () => {
        return this.state.breweries.map((brewery, index) => {
            return <Marker key={index} id={index} position={{
                lat: brewery.lat,
                lng: brewery.lng
            }} />
        })
    }

    render() {
        return (
            <div className="goog-map">
                <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 30.391830, lng: -92.329102 }}
                >
                {this.displayPoints()}
                </Map>
                
            </div>
        );
    }
}

const mapStyles = {
    width: '30%',
    height: '40%'
    
}

const API_KEY = process.env.REACT_APP_API_KEY

export default GoogleApiWrapper({
    apiKey: API_KEY
})(MapContainer)
