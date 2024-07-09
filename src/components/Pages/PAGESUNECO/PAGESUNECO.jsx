import React from 'react';
import ProductDetails from '../../ProductDetails/ProductDetails';
import PerformanceSection from '../../PerformanceSection/PerformanceSection';
import ExpertSelection from '../../ExpertSelection/ExpertSelection';
import Description from '../../Description/Description';
import Engagement from '../../Engagement/Engagement';
import StepCard from '../../StepCard/StepCard'
function App() {
  
  return (
    <div className="App">
      <ProductDetails />
      <PerformanceSection/>
      <ExpertSelection/>
      <Description/>
      <Engagement/>
      <StepCard />
      
    </div>
  );
}

export default App;
