import React, { useState } from "react";
import img from "./image/item-2.jpeg"


const SingleItem = () => {
  return (
    <div className="section-center" style={{display: "flex",
    justifyContent: "center",
    alignItems: "center", position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'}}>
      <article className="menu-item" >
            <img src={img} className="photo" />
            <div className="item-info">
              <header>
                <h4>Meal Combos</h4>
                <h4 className="price">$12.99 - 699.99</h4>
              </header>
              <p className="item-text">Lorem ipsum dolor sit amet, consectetur  incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud.</p>
            </div>
          </article>
    </div>
  );
};

export default SingleItem;
