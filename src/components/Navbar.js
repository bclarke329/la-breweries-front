import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/allbreweries">View All Breweries</NavLink>
            </div>
        );
    }
}

export default Navbar;
