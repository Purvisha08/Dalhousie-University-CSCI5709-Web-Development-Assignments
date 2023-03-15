import React from "react";

const Type = ({ type, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {type.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Type;
