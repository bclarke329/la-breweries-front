import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewsActions'

class Reviews extends Component {

    componentDidMount() {
        this.props.fetchReviews()
    }
    
    render() {
        console.log(this.props)

        const reviews = this.props.reviews.map(r => (
            <li key={r.id}>{r.name}</li>,
            <li key={r.id}>{r.title}</li>,
            <li key={r.id}>{r.review_desc}</li>
        ))
        
        return (
            <div>
                <ul className="reviews">
                    {reviews}
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    reviews: state.reviews
    }
}


export default connect(mapStateToProps, { fetchReviews })(Reviews)
