import React from 'react';
import '../App.css';
import Nav from './Nav';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Christopher Wilson</h1>
                    </div>
        
                    <div className="col-lg-4"></div>
        
                    <div className="col-lg-4" id="link">
                        <Nav/>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;