import React from "react";
import { Link } from "react-router-dom";
const Footer = props => {
  return (
    <footer>
      <div className="footer-contents row">
        <div className="footer-contents-item">&copy; Company Moneyfolio</div>

        <div className="footer-contents-item">
          <div className="footer-contents-item-title">Company</div>
          <ul className="list compnay-list">
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Blog{" "}
              </Link>
            </li>
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Privacy Policy{" "}
              </Link>
            </li>
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Terms of Use{" "}
              </Link>
            </li>
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Copyright Policy{" "}
              </Link>
            </li>
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Contact Us{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contents-item">
          <div className="footer-contents-item-title">Help</div>
          <ul className="list help-list">
            <li className="help-list-item">
              <Link to="#" className="nav-link">
                {" "}
              </Link>
            </li>
            <li className="help-list-item">
              <Link to="#" className="nav-link">
                {" "}
                FAQ{" "}
              </Link>
            </li>
            <li className="help-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Contact Support{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contents-item">
          <div className="footer-contents-item-title">Share with Us</div>
          <ul className="list social-list">
            <li className="socail-list-item">
              <Link to="#" className="nav-link">
                facebook
              </Link>
            </li>
            <li className="socail-list-item">
              <Link to="#" className="nav-link">
                {" "}
                Instargram
              </Link>
            </li>
            <li className="socail-list-item">
              <Link to="#" className="nav-link">
                {" "}
                twitter
              </Link>
            </li>
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                google play{" "}
              </Link>
            </li>
            <li className="componay-list-item">
              <Link to="#" className="nav-link">
                {" "}
                ios{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
