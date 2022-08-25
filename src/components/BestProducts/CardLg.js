import React from "react";
import { AiFillHeart } from "react-icons/ai";
const CardLg = ({ image, vol, price, title }) => {
  return (
    <div className="cardlg">
      <img src={image} alt={title} />
      <span className="cardlg-heart">
        <AiFillHeart />
      </span>
      <div className="cardld-details">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
      <div className="cardld-vol">
        <span>{vol}</span>
      </div>
      <div className="cardlg-btn">
        <button>إضافة للسلة</button>
      </div>
    </div>
  );
};

export default CardLg;
