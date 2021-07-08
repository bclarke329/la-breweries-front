import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions/reviewsActions'

class ReviewsFormContainer extends Component {

    state = {
        name: '',
        title: '',
        review_desc: '',
        brewery_id: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value, brewery_id: this.props.id
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addReview(this.state)
        console.log(this.state)
       
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <br />
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                        <br />
                        <label>Title</label>
                        <br />
                        <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                        <br />
                        <label>Review</label>
                        <br />
                        <input type="textarea" value={this.state.review_desc} onChange={this.handleChange} name="review_desc" />
                        <br />
                    <input type="submit" value="Submit Review" />
                </form>
            </div>
        );
    }
}



export default connect(null, { addReview })(ReviewsFormContainer);
