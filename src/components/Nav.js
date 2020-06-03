import React from 'react';
import '../App.css';

//className="navbar navbar-expand-lg navbar-dark bg-primary">
const Nav = () => {
    return(
        <nav> 
            <a href="/">
                About
            </a>
            |
            <a href="/contact">
                Contact
            </a>
            |
            <a href="/portfolio">
                Portfolio
            </a>
        </nav>
    )
}

export default Nav;