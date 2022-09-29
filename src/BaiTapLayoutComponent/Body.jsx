import React from "react";
import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <div>
      <div className="container">
        <Banner />
        <div className="row mb-3">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Body;
