import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="search-box">
        <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
      <input type="text" className="search-input" placeholder="Search..." />
      
    </div>
  );
};

export default SearchBox;
