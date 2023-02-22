import React from "react";

const Banner = () => {
  return (
    <section className="banner row align__center">
      <div className="banner__left column">
        <div className="banner__content fw700 fs14">WE'RE STILL</div>
        <div className="banner__heading fw500">Filling up the spaces.</div>
        <div className="banner__buttons row align__center">
          <div className="banner__buttons banner--leftBtn bgBlue row align__center fs16 fw500">
            Explore Marketplace
          </div>
          <div className="banner__rightBtn row align__center fs16 fw500">
            See Top Deals
          </div>
        </div>
      </div>
      <img className="banner__right" src="Rectangle 10342.png" alt="" />
    </section>
  );
};

export default Banner;
