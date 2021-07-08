import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewsActions'

class Reviews extends Component {
    
    render() {
        return (
            <div>
                <p>{this.props.reviews.name}</p>
                <p>{this.props.reviews.title}</p>
                <p>{this.props.reviews.review_desc}</p>
            </div>
        );
    }
}

const mapStateToProps = state = {
    reviews: state.reviews
}

export default connect(mapStateToProps, { fetchReviews })(Reviews)
