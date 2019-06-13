import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { LogOut } from "../../store/actions/authActions";
class SignedInLinks extends Component {
  handleClick = () => {
    this.props.logout();
  };
  render() {
    return (
      <div>
        <li className="navbar-list-item">
          <NavLink
            to="/dashboard"
            className="nav-link link"
            activeClassName="is-active"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            to="/create"
            className="nav-link link"
            activeClassName="is-active"
          >
            AddExpense
          </NavLink>
        </li>

        <li className="navbar-list-item link">
          <NavLink
            to="/"
            onClick={this.handleClick}
            className="nav-link"
            activeClassName="is-active"
          >
            Logout
          </NavLink>
        </li>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LogOut())
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignedInLinks);
