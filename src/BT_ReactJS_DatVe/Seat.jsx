import React from "react";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat, selectSeat } from "../actions/datVeActions";

const Seat = () => {
  // lấy state từ store redux
  const { seats, selectedSeat } = useSelector((state) => {
    return state.datVeRedux;
  });

  const dispatch = useDispatch();

  const handleSelectSeat = (ghe) => {
    const index = selectedSeat.findIndex((item) => item.soGhe === ghe.soGhe);
    if (index === -1) {
      // dispatch({ type: "select_seat", seat: ghe });
      dispatch(selectSeat(ghe));
    } else {
      // dispatch({ type: "remove_seat", seat: ghe });
      dispatch(removeSeat(ghe));
    }
  };

  // Kiểm tra ghế đã đặt hay chưa
  const gheDangDat = (soGhe) => {
    const index = selectedSeat.findIndex((item) => item.soGhe === soGhe);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="screen"></div>
      <div className="mt-5 ">
        <table className="tableSeat">
          <tbody>
            {seats.map((seat, index) => (
              <tr key={index}>
                <td className="rowNumber">{seat.hang}</td>
                {seat.danhSachGhe.map((ghe) => {
                  if (seat.hang) {
                    let isgheDangChon = gheDangDat(ghe.soGhe);
                    return (
                      <td key={ghe.soGhe}>
                        <div
                          className={cn(
                            "ghe",
                            { gheDuocChon: ghe.daDat },
                            { gheDangChon: isgheDangChon }
                          )}
                          onClick={() => handleSelectSeat(ghe)}
                        >
                          {ghe.soGhe}
                        </div>
                      </td>
                    );
                  } else {
                    return (
                      <td key={ghe.soGhe}>
                        <div className="firstChar">{ghe.soGhe}</div>
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Seat;
