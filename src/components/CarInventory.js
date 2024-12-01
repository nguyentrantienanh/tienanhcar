import React, { useContext, useState } from "react";
import { CarContext } from "../context/CarContext";
import { Link } from "react-router-dom";
import "../styles/CarInventory.css";

function CarInventory() {
  const { cars, addCar, removeCar } = useContext(CarContext); // Using Context API
  const [newCarName, setNewCarName] = useState("");
  const [newCarType, setNewCarType] = useState("Car");
  const [newCarPrice, setNewCarPrice] = useState("");
  const [newCarSeats, setNewCarSeats] = useState("");
  const [newCarImage, setNewCarImage] = useState("");
  const [newCarDescription, setNewCarDescription] = useState("");
  const [newCarYear, setNewCarYear] = useState("");
  const [newCarFeatures, setNewCarFeatures] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("1");
  const [error, setError] = useState(""); // State for error messages

  const handleAddCar = (e) => {
    e.preventDefault();
    
    // Validation
    if (!newCarName || !newCarPrice || !newCarSeats || !newCarImage || !newCarYear) {
      setError("Vui lòng điền tất cả các trường bắt buộc!");
      return; // Prevent further actions if fields are empty
    }

    const newCar = {
      id: Date.now(),
      name: newCarName,
      type: newCarType,
      price: newCarPrice,
      seats: newCarSeats,
      image: newCarImage,
      description: newCarDescription || "Xe mới được thêm vào kho.",
      year: newCarYear,
      features: newCarFeatures.split("\n").map((feature) => feature.trim()),
      brand: newCarBrand,
      isBest: true,
    };

    addCar(newCar);
    resetForm();
    setError(""); // Clear any previous error
  };

  const resetForm = () => {
    setNewCarName("");
    setNewCarType("Car");
    setNewCarPrice("");
    setNewCarSeats("");
    setNewCarImage("");
    setNewCarDescription("");
    setNewCarYear("");
    setNewCarFeatures("");
    setNewCarBrand("1");
  };

  return (
    <div className="inventory-container">
      {/* Danh sách xe */}
      <div className="inventory-list">
        <h2>Danh sách xe</h2>
        <ul>
          {cars.map((car) => (
            <li key={car.id} className="car-item">
              <img src={car.image} alt={car.name} />
              <div>
                <h3>{car.name}</h3>
                <p>
                  <span className="price">Giá:</span> {car.price} VND - {car.seats}{" "}
                  chỗ - Năm sản xuất: {car.year}
                </p>
                <p>
                  <strong>Mô tả:</strong> {car.description}
                </p>
                <p>
                  <strong>Tính năng nổi bật:</strong>
                </p>
                <ul>
                  {car.features && car.features.length > 0 ? (
                    car.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))
                  ) : (
                    <li>Không có tính năng nổi bật</li>
                  )}
                </ul>
                <Link to={`/car/${car.id}`}>Xem chi tiết</Link>
              </div>
              <button onClick={() => removeCar(car.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Form thêm xe */}
      <div className="form-container">
        <h2>Thêm xe mới</h2>
        <form onSubmit={handleAddCar}>
          <div>
            <label>Tên xe</label>
            <input
              type="text"
              placeholder="Tên xe"
              value={newCarName}
              onChange={(e) => setNewCarName(e.target.value)}
            />
          </div>
          <div>
            <label>Loại xe</label>
            <select
              value={newCarType}
              onChange={(e) => {
                const selectedType = e.target.value;
                setNewCarType(selectedType);
                setNewCarBrand(selectedType === "Car" ? "1" : "2");
              }}
            >
              <option value="Car">Car</option>
              <option value="Motorbike">Motorbike</option>
            </select>
          </div>
          <div>
            <label>Giá thuê (VND/ngày)</label>
            <input
              type="text"
              placeholder="Giá thuê (VND/ngày)"
              value={newCarPrice}
              onChange={(e) => setNewCarPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Số chỗ ngồi</label>
            <input
              type="number"
              placeholder="Số chỗ ngồi"
              value={newCarSeats}
              onChange={(e) => setNewCarSeats(e.target.value)}
            />
          </div>
          <div>
            <label>URL hình ảnh</label>
            <input
              type="text"
              placeholder="URL hình ảnh"
              value={newCarImage}
              onChange={(e) => setNewCarImage(e.target.value)}
            />
          </div>
          <div>
            <label>Mô tả xe</label>
            <textarea
              placeholder="Mô tả xe"
              value={newCarDescription}
              onChange={(e) => setNewCarDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Năm sản xuất</label>
            <input
              type="text"
              placeholder="Năm sản xuất"
              value={newCarYear}
              onChange={(e) => setNewCarYear(e.target.value)}
            />
          </div>
          <div>
            <label>Tính năng nổi bật</label>
            <textarea
              placeholder="Tính năng nổi bật"
              value={newCarFeatures}
              onChange={(e) => setNewCarFeatures(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Show error message if validation fails */}
          <button type="submit">Thêm xe mới</button>
        </form>
      </div>
    </div>
  );
}

export default CarInventory;
