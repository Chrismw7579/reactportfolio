import React from 'react';
import '../App.css';
import Base from './Base';

const Contact = () => {

    return (
        
        <Base>
            <div id="main">
                <div className="container about">

                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Phone Number: 425-446-9536</h2>
                            <h2>Email: chrismw7579@gmail.com</h2>
                            <h2>
                                <a href="https://github.com/Chrismw7579" target="_blank" rel='noopener noreferrer'>Github Profile</a>
                            </h2>
                            <h2>
                                <a href="https://www.linkedin.com/in/christopher-wilson-47557755/" target="_blank" rel='noopener noreferrer'>Linkedin</a>
                            </h2>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact</h2>
                            <hr/>
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Name</h3>
                            <input/>
                        </div>
                        
                    </div>
            
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Email</h3>
                            <input/>
                        </div>
                        
                    </div>
            
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Message</h3>
                            <textarea></textarea>
                            
                        </div>  
                    </div>
            
                    <div className="row">
                        <div className="col-lg-12">
                            <button id="submit">Submit</button>
                        </div> 
                    </div>
            
                </div>
            </div>
        </Base>
        
    )
}


export default Contact;