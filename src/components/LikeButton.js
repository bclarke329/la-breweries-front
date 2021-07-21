import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        like: 0 
    }

    handleLike = () => {
        let newLike = this.state.like + 1
        this.setState({
            like: newLike
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLike}>Like{this.state.like}</button>
            </div>
        );
    }
}

export default LikeButton;
