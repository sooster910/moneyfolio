
import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedoutLinks';
import firebase from '../../config/fbConfig'
import { connect } from 'react-redux'


const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

  return (
    <div>
      <Link to='/dashboard'>Moneyfolio</Link>
      {links}
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar)