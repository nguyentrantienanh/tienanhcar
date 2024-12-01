import React, { useState, useContext, useEffect, useCallback } from "react";
import { CarContext } from "../context/CarContext";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import SearchBar from "./SearchBar";
import CarItem from "./CarItem"; // Import component CarItem
import img from "../img/bannerhome.png";

function Home() {
  const { cars, addRentalHistory } = useContext(CarContext); // Get cars and rental methods from context
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState({
    price: "",
    seats: "",
    type: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic
  const filterCars = useCallback(() => {
    let filtered = cars;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price filter
    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number);
      filtered = filtered.filter((car) => {
        const carPrice = parseInt(String(car.price).replace(/[^\d]/g, ""));
        return carPrice >= min && carPrice <= max;
      });
    }

    // Seats filter (don't change logic)
    if (filters.seats) {
      filtered = filtered.filter(
        (car) => Number(car.seats) === Number(filters.seats)
      );
    }

    // Type (brand) filter (don't change logic)
    if (filters.type) {
      filtered = filtered.filter(
        (car) => String(car.brand) === filters.type
      );
    }

    setFilteredCars(filtered);
  }, [cars, filters, searchQuery]);

  useEffect(() => {
    filterCars();
  }, [cars, filters, searchQuery, filterCars]);

  const handleSearch = (query) => setSearchQuery(query);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleRentCar = (car) => {
    addRentalHistory(car);
  };

  return (
    <div className="home-container">
      <h1>Chào mừng đến với TienAnhCar</h1>
      <p className="gioithieuhome"> Thế giới xe điện (bảo vệ môi trường)</p>

       {/* Thêm ảnh giới thiệu web */}
       <img src={img} alt="TienAnhCar" className="intro-image" />
      <SearchBar onSearch={handleSearch} placeholder="Tìm loại xe bạn muốn thuê..." />

      <div className="filters">
        <label>
          Lọc theo giá (VND):
          <select name="price" value={filters.price} onChange={handleFilterChange}>
            <option value="">Tất cả</option>
            <option value="0-500000">0 - 500,000 VND</option>
            <option value="500000-2000000">500,000 - 2,000,000 VND</option>
            <option value="2000000-5000000">2,000,000 - 5,000,000 VND</option>
            <option value="5000000-10000000">5,000,000 - 10,000,000 VND</option>
          </select>
        </label>

        {/* Keep seat and type filters as they were */}
        <label>
          Lọc theo chỗ ngồi:
          <select name="seats" value={filters.seats} onChange={handleFilterChange}>
            <option value="">Tất cả</option>
            <option value="2">2 chỗ</option>
            <option value="5">5 chỗ</option>
            <option value="7">7 chỗ</option>
          </select>
        </label>

        <label>
          Lọc theo loại xe:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">Tất cả</option>
            <option value="1">Xe con (Car)</option>
            <option value="2">Xe máy (Motorbikes)</option>
          </select>
        </label>
      </div>

      <div className="rent-cars-container">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarItem key={car.id} car={car} onRentCar={handleRentCar} />
          ))
        ) : (
          <p>Không tìm thấy xe nào phù hợp.</p>
        )}
      </div>

      <div className="link-container">
        <Link to="/rental-history">Xem Lịch sử thuê xe</Link>
      </div>
    </div>
  );
}

export default Home;
