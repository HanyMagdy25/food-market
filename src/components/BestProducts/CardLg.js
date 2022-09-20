import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
const CardLg = ({ image, vol, price, title, item, type }) => {
  // console.log("65", item);
  const { favourite } = useContext(GlobalContext);

  let storedFavourite = favourite.find((o) => o.id === item.id);
  const allStoredFavourite = storedFavourite ? true : false;

  const { removeProductFromFavourite, addProductToFavourite } =
    useContext(GlobalContext);
  return (
    <div className="cardlg">
      <img src={item?.image[0]} alt={item.title} />
      {allStoredFavourite ? (
        <span
          onClick={() => removeProductFromFavourite(item.id)}
          className="cardlg-heart fav"
        >
          <AiFillHeart />
        </span>
      ) : (
        <span
          onClick={() => addProductToFavourite(item)}
          className="cardlg-heart"
        >
          <AiFillHeart />
        </span>
      )}

      <div className="cardld-details">
        <h5>{item.title}</h5>
        <h6>{item.price} ريال</h6>
      </div>
      <div className="cardld-vol">
        <span>{item.vol}</span>
      </div>
      <div className="cardlg-btn">
        <Link to={`/product/${item.id}`} className="card-btn-cart">
          إضافة للسلة
        </Link>
      </div>
    </div>
  );
};

export default CardLg;
