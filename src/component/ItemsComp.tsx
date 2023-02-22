import React from "react";
import { imageArr } from "./Images";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
type itemsProps = {
  str: string;
};

const ItemsComp = (props: itemsProps) => {
  return (
    <section className="items">
      <div className="items__header row align__center">
        <p className="items__deals row align__center">{props.str}</p>
        <p className="items__deals items--explore row align__center">
          Explore
          <ArrowOutwardOutlinedIcon />
        </p>
      </div>
      <div className="items__body">
        {imageArr.map((item) => {
          return (
            <div className="items__blocks column">
              <div className="items__icons row align__center">
                <div className="items__icon row align__center ">
                  <p className="fw500 icons__percent">-59%</p>
                </div>
                <div className="items__icon items__icon--right row align__center">
                  <FavoriteBorderOutlinedIcon
                    fontSize="small"
                    className="blue"
                  />
                </div>
              </div>
              <img src={item.img} alt="" />
              <div className="items__icons row align__center">
                <p className="items__devices row align__center blue fw500">
                  Audio Devices
                </p>
                <p className="items__price row align__center fw700">₦600,000</p>
              </div>
              <p className="fw400 items__title">
                Nokia Essential Wireless Headphones 120CM BLACK
              </p>
              <div className="items__btn row align__center">
                <p className="items__btnLeft row align__center">Add to Cart</p>
                <p className="items__btnRight bgBlue row align__center">Buy Now</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemsComp;
