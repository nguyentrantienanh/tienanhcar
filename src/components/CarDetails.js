import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { CarContext } from '../context/CarContext';
import "../styles/CarDetails.css"; // Import CSS file

function CarDetails() {
  const { id } = useParams(); // Get car id from URL params
  const { cars } = useContext(CarContext);
  const navigate = useNavigate(); // Initialize the navigate function

  // Find the car based on the id
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Không tìm thấy xe.</div>;
  }

  return (
    <div className="car-details-container">
      <h1>{car.name}</h1>

      <img src={car.image} alt={car.name} />

      <p><strong>Mô tả:</strong> {car.description}</p>
      <p><strong>Loại xe:</strong> {car.type}</p>
      <p><strong>Giá thuê:</strong> {car.price} VNĐ</p>
      <p><strong>Đặc điểm nổi bật:</strong> {car.features}</p>
      <p><strong>Năm sản xuất:</strong> {car.year}</p>

      {/* Back button */}
      <button onClick={() => navigate(-1)}>
        Quay lại
      </button>
    </div>
  );
}

export default CarDetails;
