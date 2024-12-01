import React from "react";
import { Routes, Route } from "react-router-dom";
import { CarProvider } from "./context/CarContext";
import Home from "./components/Home";
import CarDetails from "./components/CarDetails";
import RentCars from "./components/RentCars";
import CarInventory from "./components/CarInventory";
import Navbar from "./components/Navbar";
import RentalHistory from "./components/RentalHistory";
import CarList from "./components/CarList";
import cars from "./data/cars";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CarProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<RentCars />} />
            <Route path="/inventory" element={<CarInventory />} />
            <Route path="/rental-history" element={<RentalHistory />} />
            <Route path="/cars" element={<CarList cars={cars} />} />
            <Route path="/car/:id" element={<CarDetails />} />
          </Routes>
          <Footer />
        </div>
      </CarProvider>
    </>
  );
}

export default App;