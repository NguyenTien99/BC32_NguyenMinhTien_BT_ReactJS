import { useEffect, useState } from "react";
import data from "./data.json";
import InfoSeat from "./InfoSeat";
import Seat from "./Seat";
import "./style.scss";

const HomeBookTickets = () => {
  // state all danh sách ghê
  const [seats, setSeats] = useState(data);
  // state ghế đang được chọn
  const [selectedSeat, setSelectedSeat] = useState([]);
  // state totalcost
  const [totalCost, setTotalCost] = useState(0);


  // hàm tính tổng số tiền
  useEffect(() => {
    const handleTotalCost = () => {
      const total = selectedSeat.reduce((output, seat) => {
        return (output += seat.gia);
      }, 0);

      setTotalCost(total);
    };
    handleTotalCost();
  }, [selectedSeat]);

  // hàm chọn Seat
  const handleSelectSeat = (seat) => {
    // kiểm tra vé đã được đặt chưa
    if (seat.daDat) {
      return;
    } else {
      // kiểm tra ghế có đang được đặt hay không ?
      const index = selectedSeat.findIndex(
        (seated) => seated.soGhe === seat.soGhe
      );
      if (index === -1) {
        setSelectedSeat([...selectedSeat, seat]);
      } else {
        handleRemoveSeated(seat.soGhe);
      }

    }
  };


  // hàm xóa ghế đã chọn
  const handleRemoveSeated = (soGhe) => {
    const NewselectedSeat = selectedSeat.filter((seat) => seat.soGhe !== soGhe);
    setSelectedSeat(NewselectedSeat);
  };

  // hàm payment
  const handlePayment = () => {
    setSelectedSeat([]);
  };

  return (
    <div className="background">
      <div className="container">
        <div className="row ">
          <div className="col-8">
            <Seat
              seats={seats}
              onSelectSeat={handleSelectSeat}
              onToggleSeat={selectedSeat}
            />
          </div>
          <div className="col-4">
            <InfoSeat
              infoSeats={selectedSeat}
              totalCost={totalCost}
              onRemoveSeated={handleRemoveSeated}
              onPayment={handlePayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBookTickets;
