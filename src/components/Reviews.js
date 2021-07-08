import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewsActions'
import ReviewsFormContainer from '../containers/ReviewsFormContainer';

class Reviews extends Component {

    state = {
        reviews: []
    }
    
    render() {
        console.log(this.props)

        const reviews = this.props.reviews.map(r => <li key={r.id}>{r.name}</li>)
        const reviewTitle = this.props.reviews.map(r => <li key={r.id}>{r.title}</li>)
        const reviewDesc = this.props.reviews.map(r => <li key={r.id}>{r.review_desc}</li>)

        return (
            <div>
                <ul>
                    {reviews}
                    {reviewTitle}
                    {reviewDesc}
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


export default connect(mapStateToProps)(Reviews)
