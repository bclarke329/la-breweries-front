import React, { Component } from 'react';

class ReviewsFormContainer extends Component {

    state = {
        name: '',
        title: '',
        review_desc: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form>
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

export default ReviewsFormContainer;
