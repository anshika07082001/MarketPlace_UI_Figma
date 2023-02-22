import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import ItemsComp from "./ItemsComp";
import SubscribeComp from "./SubscribeComp";

const Main = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <ItemsComp str="Our Top Deals" />
        <ItemsComp str="Best Selling Products" />
        <SubscribeComp />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
