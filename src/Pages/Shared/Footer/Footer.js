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
              <div className="mt-5">
                <h6>Address</h6>
                <p>65, Central Road, Dhanmodi,Dhaka</p>
                <h6>Telephone</h6>
                <p>+886525422</p>
                <h6>Email</h6>
                <p>noblecure@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 right-container">
            <div className="row">
              <div className="col-md-6 d-md-flex justify-content-md-center justify-content-sm-center">
                <ul className="">
                  <li className="footer-menu">Get Help</li>
                  <li className="footer-menu">Ask any question</li>
                  <li className="footer-menu">Our Hospitals</li>
                  <li className="footer-menu">News Room</li>
                  <li className="footer-menu">Privacy Policy</li>
                  <li className="footer-menu">Terms and Policy</li>
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
        <div className="row text-light d-md-flex justify-content-md-center">
          <small className="col-md-12">
            <p className="text-center">
              All right reserved by <i className="far fa-copyright"></i>
              Noble Cure
            </p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
