import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const CardLg = ({ image, vol, price, title ,item }) => {
  console.log("65",item)
  return (
    <Link to={`/inside/${item.id}`} className="cardlg">
      <img src={item.image} alt={item.title} />
      <span className="cardlg-heart">
        <AiFillHeart />
      </span>
      <div className="cardld-details">
        <h5>{item.title}</h5>
        <h6>{item.price}</h6>
      </div>
      <div className="cardld-vol">
        <span>{item.vol}</span>
      </div>
      <div className="cardlg-btn">
        <button>إضافة للسلة</button>
      </div>
    </Link>
  );
};

export default CardLg;
