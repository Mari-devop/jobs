import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Home from './components/Home/Home';
import CardPage from './components/CardPage/CardPage';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Router basename="/jobs">
          <Routes>
            <Route
              path="/"
              element={<Home onSearch={(search, location, isChecked) => {}} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
            />
            <Route path="/CardPage/:id" element={<CardPage toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};


export default App;
