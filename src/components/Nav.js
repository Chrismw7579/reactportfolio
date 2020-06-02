import React from 'react';
import '../App.css';


const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                About
            </a>
            |
            <a className="navbar-brand" href="/contact">
                Contact
            </a>
            |
            <a className="navbar-brand" href="/portfolio">
                Portfolio
            </a>
        </nav>
    )
}

export default Nav;