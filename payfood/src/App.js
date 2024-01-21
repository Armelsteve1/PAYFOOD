import React, { useState } from 'react';
import './App.css';
import LandingPage from './Component/HomePage/home-page';
import NavigationBar from './Component/Navbar/Navbar';
import Restaurants from './Component/Partners/restaurants'; 

// import ReactGA from 'react-ga';
// const TRACKING_ID = "411751010";
// ReactGA.initialize(TRACKING_ID, { debug: true });

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <NavigationBar onPageChange={handlePageChange}></NavigationBar>
      {currentPage === 'landing' && <LandingPage></LandingPage>}
      {currentPage === 'restaurants' && <Restaurants></Restaurants>}
    </div>
  );
}

export default App;
