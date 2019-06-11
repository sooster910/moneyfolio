import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedoutLinks";
import { connect } from "react-redux";

import logo from "../../styles/pics/moneyfolio_small.png";

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <div className="navbar">
      <nav className="row">
        <Link to="/dashboard" className="navbar-brand">
          <span>
            <i className="fas fa-wallet icon icon_logo" />
          </span>
          Moneyfolio
        </Link>
        <ul className="navbar-list">{links}</ul>
      </nav>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
