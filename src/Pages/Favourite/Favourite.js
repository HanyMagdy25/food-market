import React, { useContext } from "react";
import CardLg from "../../components/BestProducts/CardLg";
import { GlobalContext } from "../../context/GlobalContext";
import "./Favourite.css";
import emptyFav from "../../assets/images/emptyFav.png";
import { Link } from "react-router-dom";

export default function Favourite() {
  const { favourite } = useContext(GlobalContext);
  console.log(favourite.length);

  return (
    <div className="favourite">
      <div className="favourite-container">
        <h2>المفضلة</h2>
        {favourite.length > 0 ? (
          <div className="cards-favourite">
            {favourite.map((item, index) => (
              <CardLg key={index} item={item} type="favourite" />
            ))}
          </div>
        ) : (
          <div className="favourite-empty">
            <img src={emptyFav} alt="empty"/>
            <h3>المفضلة فارغة</h3>
            <Link to="/">
            قم بالتسوق لإضافة منتجات
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
