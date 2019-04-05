
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'
import firebase, { googleAuthProvider } from "../../config/fbConfig";


class SignIn extends Component {
 
 
  handleClick = () => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
      this.props.history.push('/dashboard');
    })

  }
  render() {
    const { auth } = this.props
    if (auth.uid) return <Redirect to="/dashboard" />

    return (
      <div>

        <button onClick={this.handleClick} >Google Login </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignIn)
//export default SignIn