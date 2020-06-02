import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        {/* <Nav/> */}
        <Switch>
          <Route exact path={['/','/about']}>
            <About/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
