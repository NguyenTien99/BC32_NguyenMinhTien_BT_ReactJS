import React from "react";
import InfoSeat from "./InfoSeat";
import Seat from "./Seat";
import "./style.scss";

const HomeBookTickets = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="row ">
          <div className="col-8">
            <Seat />
          </div>
          <div className="col-4">
            <InfoSeat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBookTickets;
