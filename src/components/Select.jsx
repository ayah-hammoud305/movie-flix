import React from 'react';

const Select = ({ selectedType, onTypeChange }) => {
  return (
    <select
      className='select__type'
      value={selectedType}
      onChange={(event) => onTypeChange(event.target.value)}
    >
      <option value="" disabled>
        Sort by Film Type
      </option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default Select;
