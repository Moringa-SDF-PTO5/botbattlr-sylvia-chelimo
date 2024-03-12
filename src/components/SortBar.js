// SortBar.js
import React from 'react';

const SortBar = ({ onSortChange }) => {
  const handleSortChange = (criteria) => {
    onSortChange(criteria);
  };

  return (
    <div className="sort-bar">
      <button onClick={() => handleSortChange('health')}>Sort by Health</button>
      <button onClick={() => handleSortChange('damage')}>Sort by Damage</button>
      <button onClick={() => handleSortChange('armor')}>Sort by Armor</button>
    </div>
  );
};

export default SortBar;
