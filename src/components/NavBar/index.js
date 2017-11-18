import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link className="navbar-brand" to="/">Genesys Web Assistant</Link>
                <Link className="navbar-nav navbar-right" to="/about">About</Link>
            </nav>
        );
    }
};