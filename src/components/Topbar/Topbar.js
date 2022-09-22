import React, { useContext, useEffect, useState } from "react";
import "./Topbar.css";
import { BsHeartFill, BsFillCartPlusFill, BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Topbar = () => {
  const [cartItems, setCartItems] = useState(null);
  const { cart } = useContext(GlobalContext);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart.length]);

  return (
    <div className="section--topbar">
      <div className="section--topbar__container">
        <div className="logo">
          <Link to="/">LOgo</Link>
        </div>
        <div className="section--topbar-left">
          <div className="icons-topbar">
            <Link to="/cart" className="icon-topbar topbar-cart">
              {cartItems > 0 && <span>{cartItems}</span>}
              <BsFillCartPlusFill />
            </Link>
            <Link to="/favourite" className="icon-topbar topbar-heart">
              <BsHeartFill />
            </Link>
            <Link to="/signup" className="icon-topbar topbar-user">
              <FaUserAlt />
            </Link>
            <span className="icon-topbar topbar-global">
              <AiOutlineGlobal />
            </span>
          </div>
          <div className="input-topbar">
            <input type="text" />
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
