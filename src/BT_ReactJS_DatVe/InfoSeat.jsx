import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTotal, removeSeat, payment } from "../actions/datVeActions";

const InfoSeat = () => {
  const { selectedSeat, totalCost } = useSelector((state) => state.datVeRedux);

  const dispatch = useDispatch();
  const handleRemoveSeat = (ghe) => {
    // dispatch({ type: "remove_seat", seat: seat });
    dispatch(removeSeat(ghe))
  };

  useEffect(() => {
    // dispatch({ type: "calc_total" });
    dispatch(calcTotal());

  }, [selectedSeat]);

  const handlePayment = () => {
    // dispatch({ type: "payment" });
    dispatch(payment());

  };

  return (
    <div className="table__infoSeat mt-5">
      <h3>Danh sách ghế của bạn</h3>
      <p>Ghế chưa đặt</p>
      <p>Ghế đang đặt</p>
      <p>Ghế đã đặt</p>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedSeat.map((seat) => (
              <tr key={seat.soGhe}>
                <td>{seat.soGhe}</td>
                <td>{seat.gia}</td>
                <td>
                  <div
                    className="cancel"
                    onClick={() => handleRemoveSeat(seat)}
                  >
                    x
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-danger fs-4">
              <td>Tổng tiền</td>
              <td>{totalCost.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
        <button
          className="btn btn-success d-grid col-12 mx-auto"
          onClick={handlePayment}
        >
          Mua vé
        </button>
      </div>
    </div>
  );
};

export default InfoSeat;
