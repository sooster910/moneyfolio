import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
    this.toggleHandler = this.toggleHandler.bind(this);
    this.linkHandler = this.linkHandler.bind(this);
  }

  toggleHandler() {
    this.setState(prevState => {
      return {
        isHidden: !prevState.isHidden
      };
    });
  }

  linkHandler() {
    this.setState({ isHidden: true });
  }
  render() {
    const { auth } = this.props;
    const links = auth.uid ? (
      <SignedInLinks linkHandler={this.linkHandler} />
    ) : (
      <SignedOutLinks />
    );
    const sidebar = <ul className="navbar-list">{links}</ul>;
    return (
      <nav className="navbar">
        <Link to="/dashboard" className="navbar-brand link">
          <span>
            <i className="fas fa-wallet icon icon_logo" />
          </span>
          Moneyfolio
        </Link>
        <div className="navbar-sidebar">
          <button
            type="button"
            className="toggle-collapse"
            id="toggle-button"
            onClick={this.toggleHandler}
          >
            <ion-icon name="list-box" className="icon_menu" size="large" />
          </button>
          {this.state.isHidden ? !sidebar : sidebar}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
