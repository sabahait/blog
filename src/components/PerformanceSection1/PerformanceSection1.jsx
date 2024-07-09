import React from 'react';
import '../PerformanceSection1/PerformanceSection1.css';

const PerformanceSection = () => {
  return (
    <div className="performance-section">
      <div className="left">
        <h2>L’offre solaire performante et flexible qui optimise votre réduction de acture</h2>
        <div className="stats">
          <div className="stat">
            <table>
              <tr>
                <td className='S'><p>50% </p></td>
                <td ><p className='sa'>max. de réduction immédiate de facture d’électricité</p></td>
              </tr>
            </table>
          </div>
          <div className="stat">
            <table>
              <tr>
                <td><p className='S'>3 400 kWh</p></td>
                <td><p className='sa'>max. de production avec votre centrale solaire</p></td>
              </tr>
            </table> 
          </div>
        </div>
      </div>
      <div className="right">
        <div className="info-box">
          <h3>Accompagnement Zéro Tracas</h3>
          <h1>5 ans</h1>
          <p> de maintenances offerte sur votre centrale solaire</p>
        </div>
      </div>
      
    </div>
  );
};

export default PerformanceSection;
