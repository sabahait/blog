import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../src/components/Pages/MainPage/MainPage';
import OfferPage from '../src/components/Pages/OfferPage/OfferPage';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import PagesSuneco from '../src/components/Pages/PAGESUNECO/PAGESUNECO';
import PageSunPrime from '../src/components/Pages/PAGESUNPRIME/PageSunPrime'
import PageGaranties from '../src/components/Pages/PAGEGARANTIES/PageGaranties';
import PageContact from '../src/components/Pages/PageContact/PageContact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/PagesSuneco" element={<PagesSuneco />} />
          <Route path="/PageSunPrime" element={<PageSunPrime />} />
          <Route path="/PageGaranties" element={<PageGaranties />} />
          <Route path="/PageContact" element={<PageContact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
