import React, { useState, useEffect } from 'react';
import './App.css';

const SearchBar = ({ data, onDataSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // This effect runs whenever the search term or data changes
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    onDataSearch(filteredData);
  }, [searchTerm, data, onDataSearch]);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If search term is empty, trigger reset action
      window.location.reload();
    } else {
      // Perform search based on the entered term
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.features.some((feature) =>
            feature.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      onDataSearch(filteredData);
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleInput = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.trim() === '') {
      // If input is empty, trigger the same action as "Search" button
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for products or addons"
        value={searchTerm}
        onChange={handleInput} // Use handleInput for input change
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
