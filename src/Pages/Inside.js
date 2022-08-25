import React from "react";
import { useParams } from "react-router-dom";
import CardLg from "../components/BestProducts/CardLg";
import { products } from "../utils/data";
import "./Inside.css";
const Inside = () => {
  const param = useParams();
  const oneProduct = products.find((a) => a.id === param.id);
  console.log(oneProduct);
  return (
    <div className="inside-section">
      <div className="inside-section-container">
        <div className="section-container-top">
          <div className="inside-img">
            <img src={oneProduct.image} alt={oneProduct.title} />
          </div>
          <div className="inside-details">
            <h3>{oneProduct.title}</h3>
            <h5>{oneProduct.vol}</h5>
            <h3>الوصف</h3>
            <p>{oneProduct.describtion}</p>
            <h2>{oneProduct.price}</h2>
          </div>
        </div>
        <hr/>
        <div className="section-container-bottom">
          <h2>قد يعجبك ايضا</h2>
          <div className="section-container-bottom-cards">
            {products?.slice(0,8)?.map((item,index)=>(
          
                <CardLg item={item}/>
          
            
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Inside;
