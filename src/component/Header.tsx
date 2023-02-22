import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  return (
    <section className="header align__center row">
      <p className="header__logo fw500 fs14 logo__span">YOUR LOGO</p>
      <div className="header__links align__center row">
        <p className="header__lists align__center row fw500 fs16">
          Market Place
        </p>
        <div className="header__lists align__center header__lists--blog row fw500 fs16">
          Blog
        </div>
        <div className="header__lists align__center header__lists--pricing row fw500 fs16">
          Pricing
        </div>
        <div className="header__lists align__center header__lists--about row fw500 fs16">
          About
        </div>
        <div className="header__lists align__center header__lists--contact row fw500 fs16">
          Contact
        </div>
      </div>
      <div className="header__profile align__center row">
        <div className="header__profile align__center header__profile--shop bgBlue row">
          <ShoppingBagOutlinedIcon fontSize="large" />
        </div>
        <div className="header__profile align__center header__profile--shop row">
          <img src="Ellipse 67.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
