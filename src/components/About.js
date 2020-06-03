import React from 'react';
import '../App.css';
import Base from './Base';
import Pic from '../images/MyPhoto.jpg';

const About = () => {

    return (
        
        <Base>
            <div id="main">
                <div  className="container content">
                    <div className="row about">
                        <div className="col-lg-12" >
                            <h2>About Me</h2>
                            <hr/>
                            <img id="Picture" src={Pic} alt="Mypicture"/>
                            <p> Skilled in Full-Stack Development, Differentials, Mathematical Modeling,
                                Mathematics, and Calculus. University of Washington graduate with a 
                                Bachelor of Applied Science (B.A.Sc.) focused in Applied Mathematics. I also
                                have a certificate in Full-Stack Development from the University of Washington. 
                                I love science and technology, and learning new things. 
                            </p>
                        </div>        
                    </div>
                </div>
            </div>
        </Base>
        
    )
}


export default About;