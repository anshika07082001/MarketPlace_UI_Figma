import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <section className="footer row">
      <div className="footer__about column">
        <div className="footer__logo">Your Company</div>
        <div className="fw400 fs16 footer__content">
          Our mission is to make gadjet purchase, accessible and affordable.
        </div>
      </div>
      <div className="footer__links column">
        <div className="footer__logo">Helpful Links</div>
        <div className="footer__logo footer__logo--content">Home</div>
        <div className="footer__logo footer__logo--content">About Us</div>
        <div className="footer__logo footer__logo--content">Marketplace</div>
        <div className="footer__logo footer__logo--content">Blog</div>
        <div className="footer__logo footer__logo--content">Contact Us</div>
      </div>
      <div className="footer__links column">
        <div className="footer__logo">Site Map</div>
        <div className="footer__logo footer__logo--content">Our Mobile App</div>
        <div className="footer__logo footer__logo--content">
          Frequently Asked Questions
        </div>
        <div className="footer__logo footer__logo--content">Help Desk</div>
        <div className="footer__logo footer__logo--content">Privacy Policy</div>
        <div className="footer__logo footer__logo--content">
          Terms and Conditions
        </div>
      </div>
      <div className="footer__links column">
        <div className="footer__logo">Contact Us</div>
        <div className="footer__socials row align__center">
          <div className="footer__social row align__center">
            <FacebookOutlinedIcon />
          </div>
          <div className="footer__social row align__center">
            <TwitterIcon />
          </div>
          <div className="footer__social row align__center">
            <InstagramIcon />
          </div>
          <div className="footer__social row align__center">
            <LinkedInIcon />
          </div>
        </div>
        <div className="footer__logo footer__logo--content">hello@yourcompany.com</div>
      </div>
    </section>
  );
};

export default Footer;
