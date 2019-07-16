import React from 'react';
import { Route, HashRouter} from 'react-router-dom';
import './App.css';
import Films from './Films';
import Locations from './Locations';
import Characters from './Characters';
import Home from './Home';
import Navbar from './Navbar'; 


function App() {
  return (
    < HashRouter >
      <div className="App">
        <h1> Welcome to my Studio Ghibli fan site!</h1>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/Locations" component={Locations} />
        <Route path="/Characters" component={Characters} />
        <Route path="/Films" component={Films} />
      </div>
    </HashRouter >
  );
};

export default App;
