import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewsActions'


class Reviews extends Component {

    componentDidMount() {
        this.props.fetchReviews()
        console.log(4)
    }
    
    render() {
        // console.log(this.props)

        let reviews = this.props.reviews

        const filteredReviews = reviews.filter( r => r.brewery_id === this.props.id)
     
        return (
            <div>
                <h3>Reviews: </h3>
                <p>Leave your first and last initial and tell others why you love this brewery!</p><br/>
                {filteredReviews.map(r => (
                <ul key={r.id} className="reviews">
                    <li className="reviewer-name">{r.name}</li>
                    <li className="review-title">{r.title}</li>
                    <li className="review-desc">{r.review_desc}</li>
                </ul>
                ))}
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
