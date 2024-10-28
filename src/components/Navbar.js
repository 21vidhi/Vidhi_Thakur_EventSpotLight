import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events..."
        value={query}
        onChange={handleSearch}
        className="navbar-search"
      />
    </nav>
  );
};

export default Navbar;
