import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <h1>Brews On The Bayou</h1>
                <h2>Log in to save your favorite beers and leave comments for others to see.</h2>
                <form>
                    <label>Username</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" />
                    <br />
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;
