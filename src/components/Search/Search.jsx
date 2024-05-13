import React, { useState, useEffect } from 'react';
import { SearchComponent } from './SearchStyled';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState(''); 
  const [isChecked, setIsChecked] = useState(false);

  const handleSearch = () => {
    if (isChecked) {
      onSearch('', locationQuery, isChecked);
    } else {
      onSearch(searchQuery, locationQuery, isChecked);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === '' && locationQuery.trim() === '') {
      onSearch('', '', isChecked); 
    }
  }, [searchQuery, locationQuery, isChecked, onSearch]);

  return (
    <SearchComponent>
      <input
        type='text'
        className='search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Filter by title, companies, expertise...'
      />
      <input
        type='text'
        className='navi'
        value={locationQuery}
        onChange={(e) => setLocationQuery(e.target.value)}
        placeholder='Filter by location...'
      />
      <input
        type='checkbox'
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
      />
      <label>Full time only</label>
      <button onClick={handleSearch}>Search</button>
    </SearchComponent>
  );
};

export default Search;
