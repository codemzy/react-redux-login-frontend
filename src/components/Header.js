import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// action creators
import * as actions from '../actions/index';

class Header extends React.Component {
    
    _authButton() {
        if (this.props.authenticated) {
            return <button onClick={() => this.props.dispatch(actions.authenticate(false))}>Sign Out</button>;
        } else {
            return <button onClick={() => this.props.dispatch(actions.authenticate(true))}>Sign In</button>;
        }
    }
    
    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this._authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default connect((state) => {
    return {
        authenticated: state.authenticated
    };
})(Header);

