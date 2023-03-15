import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ items }) => {
 
  const navigate = useNavigate();

  function handleClick() {
    navigate("/singleitem")
  };

  return (
    <div className="section-center" >
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item" onClick={() => handleClick()} style = { {cursor: 'pointer'}}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
          
        );
      })}
    </div>
  );
};

export default Menu;
