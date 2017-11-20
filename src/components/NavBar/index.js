import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Genesys Web Assistant</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link className="navbar-item" to="/npcs">NPCs</Link></li>
                    <li><Link className="navbar-item" to="/equipment">Equipment</Link></li>
                    <li><Link className="navbar-item" to="/admin">Admin</Link></li>
                    <li><Link className="navbar-item" to="/about">About</Link></li>
                </ul>
            </nav>
        );
    }
};