import React, { Component } from 'react';

class ReviewsFormContainer extends Component {


    render() {
        return (
            <div>
                <form>
                    <p>
                        <label>Name</label>
                        <input type="text" />
                        <label>Title</label>
                        <input type="text" />
                        <label>Review</label>
                        <input type="textarea" />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default ReviewsFormContainer;
