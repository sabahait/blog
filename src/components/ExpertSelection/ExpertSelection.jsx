import React from 'react';
import '../ExpertSelection/ExpertSelection.css';
import DualSunLogo from '../../assets/website/Photo11.png'; // Assurez-vous d'avoir les images appropriées
import APSystemsLogo from '../../assets/website/Photo12.jpg';
const ExpertSelection = () => {
  return (
    <div className="expert-selection">
      <h2>La sélection de nos experts en énergie</h2>
      <p>Les meilleures technologies du moment au meilleur prix</p>
      <div className="products">
      <table>
        <tr>
            <td>
            <div className="product">
          <h3>Panneaux solaires 500Wc monocristallins dernière génération avec technologie Half-Cut</h3>
          <ul>
            <li>Performance: <span className="stars">★★★★☆</span></li>
            <li>Durabilité: <span className="stars">★★★★☆</span></li>
            <li>Esthétique: <span className="stars">★★★★☆</span></li>
          </ul>
          <p>Recyclable à 95%, cette sélection de panneaux solaires allie performance, durabilité et esthétique.</p>
          <div className="guarantees">
            <div>30 ans de garantie fabricant</div>
            <div>30 ans de garantie de performance à 87%</div>
          </div>
        </div>
            </td>
            <td>
            <div className="product">
          <h3>Micro-onduleurs APYSYSTEM avec optimiser selon votre situation</h3>
          <ul>
            <li>Performance: <span className="stars">★★★★★</span></li>
            <li>Durabilité: <span className="stars">★★★★★</span></li>
            <li>Esthétique: <span className="stars">★★★★☆</span></li>
          </ul>
          <p>Ce micro-onduleur dans sa version DS3 et d'une puissance de sortie de 880VA rassemble toutes les innovations des générations précédentes.</p>
          <div className="guarantees">
            <div>20 ans de garantie fabricant pour les micro-onduleurs</div>
            <div>5 ans de garantie fabricant pour la passerelle de communication</div>
          </div>
        </div>
            </td>
        </tr>
      </table>
      </div>
      <div className="logos">
        <img src={DualSunLogo} alt="DualSun" />
        <img src={APSystemsLogo} alt="APSystems" />
      </div>
    </div>
  );
};

export default ExpertSelection;
