import React, { useContext, useState } from 'react';
import CarItem from './CarItem';
import SearchBar from './SearchBar';
import { CarContext } from '../context/CarContext'; // Import CarContext
import "../styles/RentCars.css";

function RentCars() {
  const { cars } = useContext(CarContext); // Lấy danh sách xe từ context
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
<div className="rent-cars-container">
  <h2>Danh sách xe thuê</h2>
  <SearchBar onSearch={handleSearch} placeholder="Tìm xe..." />
  <div className="car-list">
    {filteredCars.map((car) => (
      <CarItem key={car.id} car={car} />
    ))}
  </div>
</div>
  );
}

export default RentCars;
