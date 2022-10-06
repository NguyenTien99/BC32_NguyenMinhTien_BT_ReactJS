import React from "react";

const Glasses = ({ product, onSelectGlass }) => {
  return (
    <div id="glasses" className="row">
      {product.map((item) => (
        <div key={item.id} className="col-2 mt-1">
          <img src={item.url} alt={item.name} onClick={() => onSelectGlass(item)} />
        </div>
      ))}
    </div>
  );
};

export default Glasses;


