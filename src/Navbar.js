import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    constructor() {

        super();
        this.state = {
            active: false 
        }
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log('toggle')
    };


    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" onClick={this.toggleClass} data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* This is the part of the code that enables the hamburger menu. Icon-bar is just a horizontal bar that is seen when the viewer looks at the website in mobile view */}
                    </div>
                    <div className={this.state.active ? 'navbar-collapse': 'navbar-collapse collapse'}  id="navbar-collapse">

                        <ul className="nav navbar-nav"> <Link to="/" className="active">Home</Link>
                            <li><Link to="/Locations">Locations</Link></li>
                            <li><Link to="/Characters">Characters</Link></li>
                            <li><Link to="/Films">Films</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}





// const Navbar = () => {

//     // return (

//     //     <nav className="navbar navbar-inverse">
//     //         <div className="container-fluid">
//     //             <div className="navbar-header">
//     //                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
//     //                     <span className="sr-only">Toggle navigation</span>
//     //                     <span className="icon-bar"></span>
//     //                     <span className="icon-bar"></span>
//     //                     <span className="icon-bar"></span>
//     //                 </button>
//     //                 {/* This is the part of the code that enables the hamburger menu. Icon-bar is just a horizontal bar that is seen when the viewer looks at the website in mobile view */}
//     //             </div>
//     //             <div className="collapse navbar-collapse" id="navbar-collapse">

//     //                 <ul className="nav navbar-nav"> <Link to="/" className="active">Home</Link>
//     //                     <li><Link to="/Locations">Locations</Link></li>
//     //                     <li><Link to="/Characters">Characters</Link></li>
//     //                     <li><Link to="/Films">Films</Link></li>
//     //                 </ul>
//     //             </div>
//     //         </div>
//     //     </nav>
// // 
//     )




// }

export default Navbar 
