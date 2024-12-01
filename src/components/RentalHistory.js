import React, { useContext } from "react";
import { CarContext } from "../context/CarContext"; // Import context

function RentalHistory() {
  const { rentalHistory, cancelRentalHistory, deleteRentalHistory } = useContext(CarContext);

  const handleCancel = (id) => {
    // Call the cancel function from context
    cancelRentalHistory(id);
  };

  const handleDelete = (id) => {
    // Call the delete function from context
    deleteRentalHistory(id);
  };

  return (
    <div className="rental-history">
      <h2>Lịch sử thuê xe</h2>
      {rentalHistory.length > 0 ? (
        rentalHistory.map((rental) => (
          <div
            key={rental.id}
            className={`rental-item ${rental.cancelled ? "cancelled" : ""}`}
          >
            <h3>{rental.car.name}</h3>
            <p>Ngày thuê: {rental.date}</p>
            <p>Tổng tiền: {rental.totalPrice.toLocaleString()} VND</p>
            <p>
              Thông tin thuê: <br />
              - Tên: {rental.rentalInfo.name} <br />
              - Địa chỉ: {rental.rentalInfo.address} <br />
              - Số điện thoại: {rental.rentalInfo.phoneNumber}
            </p>

            {/* Conditionally render Cancel button */}
            {!rental.cancelled && (
              <button
                onClick={() => handleCancel(rental.id)}
                className="cancel-button"
              >
                Hủy thuê
              </button>
            )}

            {rental.cancelled && <p>Đã hủy</p>}

            {/* Delete button, always visible */}
            <button
              onClick={() => handleDelete(rental.id)}
              className="delete-button"
            >
              Xóa
            </button>
          </div>
        ))
      ) : (
        <p>Không có lịch sử thuê xe nào.</p>
      )}
    </div>
  );
}

export default RentalHistory;
