import React from 'react';
import '../ExpertSelection/ExpertSelection.css';
<<<<<<< HEAD
import dualsunLogo from '../../assets/website/Photo11.png'; // Replace with the actual path to your logo
import apsystemsLogo from '../../assets/website/Photo12.jpg'; // Replace with the actual path to your logo

const ExpertsSelection = () => {
  return (
    <div className="experts-selection">
      <h2>La sélection de nos experts en énergie</h2>
      <p>Les meilleures technologies du moment au meilleur prix</p>
      <div className="cards-container">
        <div className="card">
          <h3>Panneaux solaires 500Wc monocristallins dernière génération avec technologie Half-Cut</h3>
          <div className="rating">
            <p>Performance: 4/5</p>
            <div className="stars">★★★★☆ </div>
            <p>Durabilité:  4/5</p>
            <div className="stars">★★★★☆ </div>
            <p>Esthétisme:  4/5</p>
            <div className="stars">★★★★★</div>
          </div>
          <p className='fonc'>Recyclable à 95%, cette sélection de panneaux solaires allie performance, durabilité et esthétisme.</p>
          <div className="warranty">
          <span>30 ans</span>  <p> de garantie fabricant</p>
          <span> 30 ans</span><p> de garantie de performance à 87%</p>
          </div>
        </div>
        <div className="card">
          <h3>Micro-onduleurs APYSYSTEM avec optimiseur selon votre situation</h3>
          <div className="rating">
            <p>Performance: 5/5</p>
            <div className="stars">★★★★★ </div>
            <p>Durabilité: 4/5</p>
            <div className="stars">★★★★☆ </div>
            <p>Esthétisme:5/5</p>
            <div className="stars">★★★★★ </div>
          </div>
          <p  className='fonc'>Ce micro-onduleur dans sa version DS3 et d'une puissance de sortie de 880VA rassemble toutes les innovations des générations précédentes.</p>
          <div className="warranty">
           <span>20 ans</span> <p> de garantie fabricant pour les micro-onduleurs</p>
            <span>5 ans</span><p> de garantie fabricant pour la passerelle de communication</p>
          </div>
        </div>
      </div>
      <div className="logos">
        <img src={dualsunLogo} alt="DualSun Logo" />
        <img src={apsystemsLogo} alt="APSystems Logo" />
=======
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
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ExpertsSelection;
=======
export default ExpertSelection;
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
