
import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedoutLinks';
import { connect } from 'react-redux'
import '../../styles/main.css'
import logo from '../../styles/pics/moneyfolio_small.png';

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ml-5 mr-5">
          <Link to='/dashboard' className="navbar-brand ml-8 mt-2">
            <span><img className="img-responsive mr-2" src={logo} alt="Logo" height="50px" /></span>
            Moneyfolio
        </Link>
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain">
            <span className="navbar-toggler-icon"></span>

          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mt-2">
              {links}
            </ul>
          </div>
        </div>
      </nav>
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