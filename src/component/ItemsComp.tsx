import React from "react";
import { imageArr } from "./Images";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
type itemsProps={
    str:string
}

const ItemsComp = (props:itemsProps) => {
  return (
    <section className="items">
      <div className="items__header row align__center">
        <div className="items__deals row align__center">{props.str}
          {/* <span className="fw500 fs16">{props.str}</span> */}
        </div>
        <div className="items__deals items--explore row align__center">
          <span>Explore</span>
          <ArrowOutwardOutlinedIcon />
        </div>
      </div>
      <div className="items__body">
        {imageArr.map((item) => {
          return (
            <div className="items__blocks column">
              <div className="items__icons row align__center">
                <div className="items__icon row align__center">
                  <div className="fw500 icons__percent">-59%</div>
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
                <div className="items__devices row align__center blue fw500">
                  Audio Devices
                </div>
                <div className="items__price row align__center fw700">
                  ₦600,000
                </div>
              </div>
              <div className="fw400 items__title">
                Nokia Essential Wireless Headphones 120CM BLACK
              </div>
              <div className="items__btn row align__center">
                <div className="items__btnLeft row align__center">
                  Add to Cart
                </div>
                <div className="items__btnRight row align__center">Buy Now</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemsComp;
