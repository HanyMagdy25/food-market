import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CardLg from "../../components/BestProducts/CardLg";
import { products } from "../../utils/data";
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

import "./Product.css";
import { GlobalContext } from "../../context/GlobalContext";
const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [count, setCount] = useState(1);
  // console.log(selet)
  const param = useParams();
  const oneProduct = products.find((a) => a.id === param.id);
  //   console.log(oneProduct);
  const {
    addProductToFavourite,
    removeProductFromFavourite,
    addProductToCart,
    removeProductFromCart,
    cart,
    favourite,
  } = useContext(GlobalContext);
  // const { favourite, cart } = useContext(GlobalContext);

  let storedFavourite = favourite.find((o) => o.id === oneProduct.id);
  const allStoredFavourite = storedFavourite ? true : false;
  let storedCart = cart.find((o) => o.id === oneProduct.id);
  const allStoredCart = storedCart ? true : false;
  // console.log("3232", allStoredFavourite);
  // const { removeProductFromFavourite,addProductToFavourite } = useContext(GlobalContext);

  return (
    <div className="product-section">
      <div className="product-section-container">
        <div className="section-container-top">
          <div className="product-img">
            <div className="five-images-div">
              {oneProduct.image?.slice(0, 5)?.map((i, index) => (
                <img
                  key={index}
                  src={i}
                  alt={oneProduct.title}
                  className={index === selectedImage ? "some-blur" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="one-image-big">
              <img
                src={oneProduct?.image[selectedImage]}
                alt={oneProduct.title}
              />
            </div>
          </div>
          <div className="product-details">
            <div className="product-details-top">
              <div className="product-title-top">
                <h3 className="product-title">{oneProduct.title}</h3>
                <h5 className="product-vol">{oneProduct.vol}</h5>
              </div>
              {/* <span
                onClick={() => addProductToFavourite(oneProduct)}
                className="product-favourite"
              >
                <AiFillHeart />
              </span> */}
              {allStoredFavourite ? (
                <span
                  onClick={() => removeProductFromFavourite(oneProduct.id)}
                  className="product-favourite fav"
                >
                  <AiFillHeart />
                </span>
              ) : (
                <span
                  onClick={() => addProductToFavourite(oneProduct)}
                  className="product-favourite"
                >
                  <AiFillHeart />
                </span>
              )}
            </div>

            {/* <h3>الوصف</h3> */}
            <p>{oneProduct.describtion}</p>
            <h2 className="product-price">{oneProduct.price} ريال</h2>

            <div className="product-quantity-div">
              <h3>الكمية</h3>
              <div className="product-quantity-div-inside">
                <div className="product-quantity-div-inside-green">
                  <button className="plus" onClick={() => setCount(count + 1)}>
                    <AiOutlinePlus />
                  </button>
                  <span>{count}</span>
                  <button
                    className="minus"
                    disabled={count < 2}
                    onClick={() => setCount(count - 1)}
                  >
                    <BsDash />
                  </button>
                </div>
                {allStoredCart ? (
                  <button
                    // onClick={() => addProductToCart(oneProduct)}
                    onClick={() => removeProductFromCart(oneProduct.id)}
                    className="product-btn remove"
                  >
                    حذف من السلة
                  </button>
                ) : (
                  <button
                    onClick={() => addProductToCart(oneProduct)}
                    className="product-btn"
                  >
                    إضافة للسلة
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*----- description ------ */}
        <div className="product-description">
          <h3>الوصف</h3>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. ذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
        </div>
        {/* <hr /> */}
        <div className="section-container-bottom">
          <h2>قد يعجبك ايضا</h2>
          <div className="section-container-bottom-cards">
            {products?.slice(0, 4)?.map((item, index) => (
              <CardLg key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
