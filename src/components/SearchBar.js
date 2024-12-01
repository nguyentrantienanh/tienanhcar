import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch, placeholder }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button type="submit">Tìm kiếm</button>
    </form>
  );
}

export default SearchBar;
