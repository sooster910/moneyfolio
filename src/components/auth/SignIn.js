import React, { Component } from 'react';
import firebase, { googleAuthProvider } from '../../config/fbConfig';

import Footer from '../layout/Footer';
import data from '../../imageSlideData/data';
import Card from './Card';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });

    // if (this.state.property.index < 3) {
    //   this.setState({
    //     property: data.properties[newIndex]
    //   });
    // } else {
    //   this.setState({
    //     property: data.properties[0]
    //   });
    // }
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;

    this.setState({
      property: data.properties[newIndex]
    });
  };
  // login button
  handleGoogleClick = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  // sign in as guest button
  handleGuestClick = () => {
    firebase.auth().signInAnonymously();
  };

  render() {
    console.log('properties length', this.state.properties.length);
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to="/" />;
    const { properties, property } = this.state;
    return (
      <div className="container landing">
        <section className="landing-title-box">
          <div className={`card-slider active-slide-${property.index}`}>
            <div
              className="card-slider-wrapper"
              style={{
                transform: `translateX(-${property.index *
                  (100 / properties.length)}%)`
              }}
            >
              {properties.map(property => (
                <Card key={property._id} property={property} />
              ))}
            </div>
          </div>

          <div className="card-slider-btn mt-xs">
            <button
              className="btn-backward"
              onClick={this.prevProperty}
              disabled={property.index === 0}
            >
              <ion-icon name="ios-arrow-back" size="large" />
            </button>

            <button
              className="btn-forward"
              onClick={() => this.nextProperty()}
              disabled={property.index === data.properties.length - 1}
            >
              <ion-icon name="ios-arrow-forward" size="large" />
            </button>
          </div>
        </section>
        <section className="landing-login-box u-center-text">
          <div className="title landing-login-box-title mb-xs">
            Interested in? Try our App!
          </div>
          <div style={{ fontsize: '12px', color: '#fff' }} className="mb-sm">
            If you want to see with data, try with ID: testmoneyfolio
            PW:moneyfolio
          </div>

          <button
            type="button"
            onClick={this.handleGuestClick}
            className="btn-lg btn-guest"
          >
            Sign in as guest
          </button>

          <button
            onClick={this.handleGoogleClick}
            className="btn-lg btn-google-plus"
          >
            <div className="icon-google">
              <ion-icon name="logo-googleplus" />
            </div>
            Sign in with Google
          </button>
        </section>
        <section className="landing-feature-box u-center-text">
          <div className="title landing-feature-box-title mb-md">
            Featured in{' '}
          </div>
          <div className="row">
            <ul className="landing-feature-box-list">
              <li className="landing-feature-box-item">
                <div className="feature_logo" />
              </li>
              <li className="landing-feature-box-item">
                <div className="feature_logo" />
              </li>
              <li className="landing-feature-box-item">
                <div className="feature_logo" />
              </li>
              <li className="landing-feature-box-item">
                <div className="feature_logo" />
              </li>
              <li className="landing-feature-box-item">
                <div className="feature_logo" />
              </li>
              <li className="landing-feature-box-item">
                <div className="feature_logo" />
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
