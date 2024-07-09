import React from 'react';
import Header from '../../Header/Header';
import Offers from '../../Offers/Offers';
import PricingSection from  '../../PricingSection/PricingSection'
import Guarantees from '../../Guarantees/Guarantees';
import SolarInstallation from '../../SolarInstallation/SolarInstallation'
import SolarInstallation1 from '../../SolarInstallation1/SolarInstallation1';
import Installation from '../../Installation/Installation';
const MainPage = () => {
  return (
    <div>
        <Header/>
        <Offers />
        <PricingSection />
        < Guarantees />
        <SolarInstallation/>
        <SolarInstallation1/>
        <Installation/>
    </div>
  );
};
export default MainPage;