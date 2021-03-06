import React from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const NavLocation = () => {

    const auth = localStorage.getItem('auth') === 'true';

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">QCM</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/qcm">QCM</Link>
                    </li>
                    <li className="nav-item">
                        {auth ? <Link className="nav-link" to='/logout' >Logout</Link> :
                            <Link className="nav-link"  to='/login'>Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const NavWithRouter = withRouter(NavLocation);

export default NavWithRouter;