import React, { createContext, useState } from 'react';
import initialCars from '../data/cars'; // Import initial car data

// Create Context
export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(initialCars); // Initial car data from external file or API
  const [rentalHistory, setRentalHistory] = useState([]); // Initialize empty rental history

  // Function to add rental history
  const addRentalHistory = (car, rentalInfo, totalPrice) => {
    setRentalHistory((prevHistory) => [
      ...prevHistory,
      { 
        id: prevHistory.length + 1, // Unique ID for each rental
        car, 
        rentalInfo, 
        totalPrice, 
        cancelled: false, // Initially, rental is not cancelled
        date: new Date().toLocaleString() // Store rental date
      }
    ]);
  };

  // Function to cancel a rental (mark as cancelled)
  const cancelRentalHistory = (id) => {
    setRentalHistory((prevHistory) =>
      prevHistory.map((rental) =>
        rental.id === id ? { ...rental, cancelled: true } : rental
      )
    );
  };

  // Function to delete rental history
  const deleteRentalHistory = (id) => {
    setRentalHistory((prevHistory) =>
      prevHistory.filter((rental) => rental.id !== id) // Remove rental by id
    );
  };

  // Function to add a new car to the list
  const addCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  // Function to remove a car from the list by ID
  const removeCar = (id) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        rentalHistory,
        addCar,
        removeCar,
        addRentalHistory,
        cancelRentalHistory,
        deleteRentalHistory, // Include delete function here
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
