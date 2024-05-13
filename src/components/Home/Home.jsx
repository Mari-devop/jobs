
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';

const Home = ({ toggleTheme, isDarkTheme, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setSearchQuery('');
    setLocationQuery('');
    setIsChecked(false);
  }, []);

  const handleSearch = (search, location, isChecked) => {
    setSearchQuery(search);
    setLocationQuery(location);
    setIsChecked(isChecked);
    onSearch(search, location, isChecked);
  };

  return (
    <>
      <Navbar    
        toggleTheme={toggleTheme} 
        isDarkTheme={isDarkTheme} 
        onSearch={handleSearch} 
      />
      <Card
        searchQuery={searchQuery}
        locationQuery={locationQuery}
        isChecked={isChecked}
      />
    </>
  );
};

export default Home;
