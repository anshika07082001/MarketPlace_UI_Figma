import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import ItemsComp from "./ItemsComp";

const Main = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Banner/>
        <ItemsComp/>
      </main>
      <footer></footer>
    </div>
  );
};

export default Main;
