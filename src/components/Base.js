import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

const Base = ({children}) => {

    return (
        <div >
            <Header/>
            {children}
            <Footer/>
        </div>
        
    )
}

export default Base;