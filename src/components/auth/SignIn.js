
import React, { Component } from 'react';
import firebase, { googleAuthProvider } from "../../config/fbConfig";
import '../../styles/landing.css'

class SignIn extends Component {

  handleGoogleClick = () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
  }
  handleGuestClick = () => {
    firebase.auth().signInAnonymously();
  }
  render() {

    return (
      <div className="landing">
        <div className="card landing-card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h2 className="card-title"> Where Your Money Disappears to?<br />Track your spending.</h2>
            <div className="row">
              <div className="col-md-auto">
                <button onClick={this.handleGoogleClick}
                  className="btn btn-block btn-social btn-google-plus">
                  <i className="fa fa-google-plus"></i> Sign in with Google
                </button>
              </div>
              <div className="col-md-auto">
                <button type="button" onClick={this.handleGuestClick}
                  className="btn btn-primary">
                  Sign in as guest
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;