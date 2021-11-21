import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container p-5">
        <div className="row text-light">
          <div className="col-md-6 left-container">
            <div>
              <h1>Noble Cure</h1>
            </div>
          </div>
          <div className="col-md-6 right-container">
            <div className="row">
              <div className="col-md-6 d-md-flex justify-content-md-center justify-content-sm-center">
                <ul className="">
                  <li className="footer-menu">Get Help</li>
                  <li className="footer-menu">Ask any question</li>
                </ul>
              </div>
              <div className="col-md-6 d-md-flex justify-content-md-center justify-content-sm-center">
                <ul className="">
                  <li className="footer-menu">Facebook</li>
                  <li className="footer-menu">Instagram</li>
                  <li className="footer-menu">Whatsapp</li>
                  <li className="footer-menu">Youtube</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-light d-md-flex align-items-md-center">
          <div className="col-md-6">
            <div className="d-md-flex justify-content-md-start">
              <p>all right reserved by mh selim</p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <ul className="d-flex justify-content-evenly">
                <li className="footer-menu">Privacy Policy</li>
                <li className="footer-menu">Terms and Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
