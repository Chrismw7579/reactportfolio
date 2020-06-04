import React from 'react';
import '../App.css';
import Base from './Base';
import Radar from '../images/radar.png';
import Quiz from '../images/quiz.png';
import Rend from '../images/rendezvuous.jpg';
import News from '../images/newsflash.png';
import Planner from '../images/planner.png';
import Weather from '../images/weather.png';
import Directory from '../images/reactDirectory.png';
import Tracker from '../images/Employeetracker.png';
import Resume from './Resume.pdf'

const Portfolio = () => {

    return (
        
        <Base>
            <div id="main">
                <div class="container about">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Portfolio</h2>
                            <h2>
                                <a href={Resume} target="_blank" rel='noopener noreferrer'>Resume</a>
                            </h2>
                            
                            <hr/>
                        </div>
                    </div>
            
                    <div class="row">
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Radar} alt="Crime Radar"/>
                                <a href="https://mitchelljohnson3.github.io/project-1/" class="label" target="_blank" rel='noopener noreferrer'>Crime Radar</a>
                                <a href="https://github.com/mitchelljohnson3/project-1" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                        
                            
                        </div>
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Quiz} alt="Code Quiz"/>
                                <a href="https://chrismw7579.github.io/Homework4-repo/" class="label" target="_blank" rel='noopener noreferrer'>Code Quiz</a>
                                <a href="https://github.com/Chrismw7579/Homework4-repo" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                        
                        </div>
                    </div>

                
                    <div class="row">
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Rend} alt="Rendezvous"/>
                                <a href="https://ancient-cliffs-00912.herokuapp.com/" class="label" target="_blank" rel='noopener noreferrer'>Rendezvous</a>
                                <a href="https://github.com/Chrismw7579/Project2" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                        
                            
                        </div>
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={News} alt="NewsFlash"/>
                                <a href="https://newsflash-news-app.herokuapp.com/" class="label" target="_blank" rel='noopener noreferrer'>NewsFlash</a>
                                <a href="https://github.com/jayballa7/news-app" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                        
                        </div>
                    </div>
                
            
                    <div class="row">
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Planner} alt="Day Planner"/>
                                <a href="https://chrismw7579.github.io/WorkDayPlanner/" class="label" target="_blank" rel='noopener noreferrer'>Day Planner</a>
                                <a href="https://github.com/Chrismw7579/WorkDayPlanner" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                            
                        </div>
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Weather} alt="Weather Dashboard"/>
                                <a href="https://chrismw7579.github.io/WeatherApp/" class="label" target="_blank" rel='noopener noreferrer'>Weather Dashboard</a>
                                <a href="https://github.com/Chrismw7579/WeatherApp" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                            
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Directory} alt="React Empolyee Directory"/>
                                <a href="https://chrismw7579.github.io/ReactEmployeeDirectory/" class="label" target="_blank" rel='noopener noreferrer'>Employee Directory</a>
                                <a href="https://github.com/Chrismw7579/ReactEmployeeDirectory" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                            
                        </div>
                        <div class="col-lg-6 py-2">
                            <div class="img-container box">
                                <img class="images" src={Tracker} alt="Employee Tracker"/>
                                <a href="https://github.com/Chrismw7579/Employeetracker" class="label" target="_blank" rel='noopener noreferrer'>Empolyee Tracker</a>
                                <a href="https://github.com/Chrismw7579/Employeetracker" class="git" target="_blank" rel='noopener noreferrer'>Github Repository</a>
                            </div>
                            
                        </div>
                    </div>
            
                </div>
            </div>
        </Base>
        
    )
}


export default Portfolio;