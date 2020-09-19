import React from "react";
import "./Footer.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__tags">
        <div className="footer__panel">
          <h2 className="footer__panelHeaders">Get to know us</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div className="footer__panel">
          <h2 className="footer__panelHeaders">Connect with us</h2>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Rohan98k/"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rohan98k/"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/rohan98k"
            >
              Github
            </a>
          </p>
        </div>
        <div className="footer__panel">
          <h2 className="footer__panelHeaders">Make Money with Us</h2>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Become an affiliate</p>
          <p>Fulfilment by Amazon</p>
        </div>
        <div className="footer__panel">
          <h2 className="footer__panelHeaders">Let Us Help You</h2>
          <p>Your Account</p>
          <p>Returns Care</p>
          <p>Amazon App Download</p>
          <p>Amazon Alexa</p>
        </div>
      </div>
      <div className="footer__countries">
        <div>
          <img src="https://www.kindpng.com/picc/b/17/172246.png" alt="" />
        </div>
        <div className="footer__countryNames">
          <p>Australia</p>
          <p>Canada</p>
          <p>France</p>
          <p>Germany</p>
          <p>India</p>
          <p>Spain</p>
          <p>United Arab Emirates</p>
          <p>United Kingdom</p>
          <p>United States of America</p>
        </div>
      </div>
      <div className="footer__tagline">
        <p>Designed and Developed by Rohan Kamath</p>
        <a href=" https://wa.me/919820338145" target="_blank">
          Click to get in touch with me on Whatsapp!
          <p className="footer__icon">
            <WhatsAppIcon />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
