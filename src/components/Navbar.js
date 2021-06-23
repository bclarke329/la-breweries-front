import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>View All Breweries</NavLink>
            </div>
        );
    }
}

export default Navbar;
