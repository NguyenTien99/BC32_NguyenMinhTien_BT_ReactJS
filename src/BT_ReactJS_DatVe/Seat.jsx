import React from "react";
import cn from "classnames";

const Seat = ({ seats, onSelectSeat,onToggleSeat }) => {

  const gheDangDat = (soGhe) => {
    const index = onToggleSeat.findIndex(item => item.soGhe === soGhe)
    if(index !== -1){
      return true
    }
    return false;
  }
  
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
                    let isgheDangChon = gheDangDat(ghe.soGhe)
                    return (
                      <td key={ghe.soGhe}>
                        <div
                          className={cn(
                            "ghe",
                            { gheDuocChon: ghe.daDat },
                            { gheDangChon: isgheDangChon }
                          )}
                          onClick={() => onSelectSeat(ghe)}
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
