import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

const Base = ({children}) => {

    return (
        <div>
            <Nav/>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Base;