import React from 'react'
import './NavbarStyled'
import Nav from '../Nav/Nav'
import  Search  from '../Search/Search'

const Navbar = ({ toggleTheme, isDarkTheme, onSearch }) => {
  return (
    <>
        <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Search onSearch={onSearch}/>
    </>
  )
}

export default Navbar
