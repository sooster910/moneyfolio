import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedoutLinks";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState(prevState => {
      return {
        isHidden: !prevState.isHidden
      };
    });
  }
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    const sidebar = <ul className="navbar-list">{links}</ul>;
    return (
      // <div className="navbar">
      //   <nav className="row">
      //     <button
      //       type="button"
      //       className="toggle-collapse link"
      //       id="toggle-button"
      //     >
      //       <ion-icon name="more" size="large" />
      //     </button>

      //     <Link to="/dashboard" className="navbar-brand link">
      //       <span>
      //         <i className="fas fa-wallet icon icon_logo" />
      //       </span>
      //       Moneyfolio
      //     </Link>
      //     <ul className="navbar-list">{links}</ul>
      //   </nav>
      // </div>

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
