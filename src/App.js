import React from 'react';
import { Route, HashRouter} from 'react-router-dom';
import './App.css';
import Films from './Films';
import Locations from './Locations';
import Characters from './Characters';
import Home from './Home';
import Navbar from './Navbar'; 

// Since this is using the react framework, I imported react from 'react', imported from react-router-dom
// and I made sure that I linked in the pages that contain my 3 endpoints that make up my website. 
// Below is my route path and exact path to make sure that when the links were clicked, they would go to the 
// correct location in the site. 
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
