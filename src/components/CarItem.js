import React, { useState, useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { Link } from 'react-router-dom';
import "../styles/CarItem.css"; // Import CSS styles

function CarItem({ car }) {
  const { addRentalHistory } = useContext(CarContext); // Get the addRentalHistory function from context
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle form visibility
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [rentalDays, setRentalDays] = useState(1); // Default rental days to 1
  const [totalPrice, setTotalPrice] = useState(car.price); // Default price based on car price
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission
  const [errors, setErrors] = useState({}); // Holds error messages

  // Calculate total price based on rental days
  const calculateTotalPrice = (rentalDays) => {
    const price = car.price * rentalDays;
    setTotalPrice(price);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    const newErrors = {};

    // Validate required fields
    if (!name) newErrors.name = "Vui lòng nhập tên!";
    if (!address) newErrors.address = "Vui lòng nhập địa chỉ!";
    if (!phone) newErrors.phone = "Vui lòng nhập số điện thoại!";

    // If there are any validation errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add rental history to context
    addRentalHistory(car, { name, address, phone }, totalPrice);

    // Show success message
    alert('Đặt xe thành công!');

    // Mark form as submitted and reset the form
    setIsFormSubmitted(true);
    resetForm();
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setAddress('');
    setPhone('');
    setRentalDays(1); // Reset to default rental days
    setTotalPrice(car.price); // Reset price to default
    setErrors({}); // Reset errors
  };

  // Toggle form visibility
  const handleRentButtonClick = () => {
    if (isFormVisible) {
      resetForm(); // Reset form when closing
    }
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className={`car-item ${car.isBest ? 'best-choice' : ''}`}>
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h3>{car.name}</h3>
        <p>Loại xe: {car.type}</p>
        <p>Giá thuê: {car.price.toLocaleString()} VND/ngày</p>
        <p>{car.description}</p>

        <Link to={`/car/${car.id}`} className="details-link">Xem chi tiết</Link>

        {/* Button to toggle rental form visibility */}
        <button 
          className="rent-button"
          onClick={handleRentButtonClick}
          disabled={isFormSubmitted} // Disable if form is submitted
        >
          {isFormSubmitted ? "Đặt xe thành công" : isFormVisible ? "Hủy thuê xe" : "Thuê xe"}
        </button>

        {/* Rental form */}
        {isFormVisible && !isFormSubmitted && (
          <form onSubmit={handleSubmit} className="rental-form">
            <div>
              <label>Tên:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
                disabled={isFormSubmitted}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div>
              <label>Địa chỉ:</label>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required
                disabled={isFormSubmitted}
              />
              {errors.address && <p className="error-message">{errors.address}</p>}
            </div>
            <div>
              <label>Số điện thoại:</label>
              <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required
                disabled={isFormSubmitted}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
            <div>
              <label>Số ngày thuê:</label>
              <input 
                type="number" 
                value={rentalDays} 
                onChange={(e) => {
                  const days = Math.max(1, Number(e.target.value));
                  setRentalDays(days);
                  calculateTotalPrice(days);
                }} 
                min="1" 
                step="1" 
                required
                disabled={isFormSubmitted}
              />
            </div>
            <div>
              <p><strong>Tổng tiền: {totalPrice.toLocaleString()} VND</strong></p>
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-button">Xác nhận thuê</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default CarItem;
