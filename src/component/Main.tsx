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
        {/* rendering of header component */}
        <Header />
      </header>
      <main>
        {/* rendering of banner component */}
        <Banner />
        {/* rendering of items component */}
        <ItemsComp str="Our Top Deals" />
        {/* rendering of items component */}
        <ItemsComp str="Best Selling Products" />
        {/* rendering of subscribe component */}
        <SubscribeComp />
      </main>
      <footer>
        {/* rendering of footer component */}
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
