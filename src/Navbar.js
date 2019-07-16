import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div> <Link to="/">Home</Link>
            <Link to="/Locations">Locations</Link>
            <Link to="/Characters">Characters</Link>
            <Link to="/Films">Films</Link>
        </div>
    )
}

export default Navbar 
