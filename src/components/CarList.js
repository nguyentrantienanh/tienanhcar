import React, { useMemo, useEffect } from 'react';
import CarItem from './CarItem';
import "../styles/CarList.css";

function CarList({ cars }) {
  // Sử dụng useMemo để tránh sắp xếp lại mỗi lần render
  const sortedCars = useMemo(() => {
    const sorted = [...cars].sort((a, b) => {
      // Ưu tiên xe có isBest là true, đặt chúng lên đầu
      return (b.isBest ? 1 : 0) - (a.isBest ? 1 : 0);
    });
    return sorted;
  }, [cars]); // Đặt lại mảng cars là dependency để khi mảng cars thay đổi thì sắp xếp lại

  // Log ra để kiểm tra xem danh sách đã được sắp xếp đúng chưa
  useEffect(() => {
    console.log(sortedCars); // Kiểm tra mảng đã được sắp xếp
  }, [sortedCars]);

  return (
    <div className="car-grid">
      {sortedCars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
