import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import './App.css';
import Films from './Films';
import Locations from './Locations';
import Characters from './Characters';
import Home from './Home';

function App() {
  return (
    < HashRouter >
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/Locations">Locations</Link>
        <Link to="/Characters">Characters</Link>
        <Link to="/Films">Films</Link>
        <h1> Welcome to my Studio Ghibli fan site!</h1>
        <Route exact path="/" component={Home} />
        <Route path="/Locations" component={Locations} />
        <Route path="/Characters" component={Characters} />
        <Route path="/Films" component={Films} />
      </div>
    </HashRouter >
  );
};

export default App;
