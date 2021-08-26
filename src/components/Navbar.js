import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return(
        <div className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/breweries">View All Breweries</NavLink>`
            <NavLink to="/login">Log In</NavLink>
        </div>
    )
}

//5 stateless
export default Navbar;
