import React from "react";

const SubscribeComp = () => {
  return (
    <section className="subscribe column align__center">
      <div className="subscribe__heading fw400">
        Subscribe to Our Newsletter
      </div>
      <div className="subscribe__para fw400 fs20">
        Don't miss out on our top deals! Dont worry we will not spam you.
      </div>
      <div className="subscribe__form row align__center">
        <input className="subscribe__input"/>
        <div className="subscribe__btn row align__center">Subscribe</div>
      </div>
    </section>
  );
};

export default SubscribeComp;
