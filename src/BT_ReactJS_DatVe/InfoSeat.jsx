import React from 'react';


const InfoSeat = ({infoSeats, onRemoveSeated, totalCost, onPayment }) => {
  return (
    <div className='table__infoSeat mt-5'>
      <h3>Danh sách ghế của bạn</h3>
      <p>Ghế chưa đặt</p>
      <p>Ghế đang đặt</p>
      <p>Ghế đã đặt</p>
      <div>
        <table className='table'>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                infoSeats.map((seat) => (
                  <tr key={seat.soGhe}>
                    <td>{seat.soGhe}</td>
                    <td>{seat.gia}</td>
                    <td>
                      <div className='cancel' 
                      onClick={() => onRemoveSeated(seat.soGhe)}>x</div>
                    </td>
                  </tr>
                ) )
              }
            </tbody>
            <tfoot>
              <tr className='text-danger fs-4'>
                <td>Tổng tiền</td>
                <td>{totalCost.toLocaleString()}</td>
              </tr>
            </tfoot>
        </table>
        <button className='btn btn-success d-grid col-12 mx-auto'  onClick={onPayment} >Mua vé</button>
      </div>
    </div>
  );
};

export default InfoSeat;