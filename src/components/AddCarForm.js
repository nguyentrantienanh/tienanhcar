import React, { useState } from 'react';

function AddCarForm({ onAddCar }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { id: Date.now(), name, type };
    onAddCar(newCar);
    setName('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên xe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Loại xe"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button type="submit">Thêm xe mới</button>
    </form>
  );
}

export default AddCarForm;
