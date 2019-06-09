import React, { Component } from "react";
import firebase, { googleAuthProvider } from "../../config/fbConfig";

import screenshot from "../../styles/pics/Screen Shot.png";
import Footer from "../layout/Footer";
// import footer from "../../styles/footer.css";
// import SignedOutLinks from "../layout/SignedoutLinks";
// import Navbar from "../layout/Navbar";
class SignIn extends Component {
  handleGoogleClick = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
  handleGuestClick = () => {
    firebase.auth().signInAnonymously();
  };
  render() {
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <section id="title">
          <div className="title-box">
            <h1 className="title-title">Search, </h1>
            <div className="typewriter">
              <h1 className="title-title">"Your spending"</h1>
            </div>
            <div className="login-box">
              <div className="row">
                <div className="col lg-6 md-6 sm-12">
                  <button
                    type="button"
                    onClick={this.handleGuestClick}
                    className="btn btn-primary btn-lg btn-guest mb-2"
                  >
                    Sign in as guest
                  </button>
                </div>
                <div className="col lg-6 md-6 sm-12">
                  <button
                    onClick={this.handleGoogleClick}
                    className="btn btn-lg btn-block btn-social btn-google-plus"
                  >
                    <i className="fa fa-google-plus" /> Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature">
          <div className="row feature-box">
            <div className="description-column col-lg-6 col-md-12 col-sm-12">
              <div className="discription-box ">
                <div className="desc1 ">
                  <i className="fas fa-search-plus fa-4x" />
                  <h3>Easy tracking</h3>
                </div>
                <div className="desc2">
                  <i className="fas fa-user-check fa-4x" />
                  <h3>Personalized for you</h3>
                </div>
                <div className="desc3">
                  <i className="fas fa-chart-pie fa-4x" />
                  <h3>All search result with chart </h3>
                </div>
              </div>
            </div>
            <div className="screenshot-column col-lg-6 col-md-12 col-sm-12">
              <img
                className="screenshot-img"
                src={screenshot}
                alt="dashboard-screenshot"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.auth
//   };
// };
// export default connect(mapStateToProps)(SignIn);
export default SignIn;
