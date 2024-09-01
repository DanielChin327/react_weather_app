// src/components/SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
    setInput(''); // Clear input after search
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name"
        spellCheck="false"
      />
      <button onClick={handleSearch}>
        <img src="../images/search.png" alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
