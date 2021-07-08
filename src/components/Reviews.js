import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewsActions'

class Reviews extends Component {

    componentDidMount() {
        this.props.fetchReviews()
    }
    
    render() {
        // console.log(this.props)

        let reviews = this.props.reviews

        const filteredReviews = reviews.filter( r => r.brewery_id === this.props.id)
        
        // const review = () => {
        //     filteredReviews.map(r => (
        //      <li>{r.name}</li>,
        //      <p>{r.title}</p>,
        //      <p>{r.review_desc}</p>
        // ))}
    
        // console.log(filteredReviews)
        
        return (
            <div>
                {filteredReviews.map(r => (
                <ul className="reviews">
                    <li>{r.name}</li>
                    <li>{r.title}</li>
                    <li>{r.review_desc}</li>
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
