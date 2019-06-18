import React, { Component } from 'react';
import firebase, { googleAuthProvider } from '../../config/fbConfig';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends Component {
  handleGoogleClick = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  render() {
    return (
      <li className="navbar-list-item">
        <NavLink
          to="/"
          className="nav-link link"
          onClick={this.handleGoogleClick}
        >
          Sign In
        </NavLink>
      </li>
    );
  }
}

export default SignedOutLinks;
