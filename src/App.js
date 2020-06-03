import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
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
