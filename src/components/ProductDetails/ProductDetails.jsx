import React from 'react';
import '../ProductDetails/ProductDetails.css';
import solarPanelImage from '../../assets/website/photo10.png'; // Assurez-vous d'avoir une image appropriée dans ce chemin
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
const ProductDetails = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Vuepage');
  };
=======

const ProductDetails = () => {
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
  return (
    <div className="product-details">
      <div className="left-column">
        <h1>Gamme SunEco</h1>
        <p>Performance et flexibilité permettant d’optimiser la production et l’autoconsommation</p>
        <img src={solarPanelImage} alt="Solar Panel" />
      </div>
      <div className="right-column">
        <h2>À partir de 5 990 €</h2>
        <p>TVA incluse</p>
        <p >Livré et posé - Prime d'autoconsommation déduite</p>
<<<<<<< HEAD
        <button className='devis' onClick={handleButtonClick}>Demander un devis</button>
=======
        <button>Demander un devis</button>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
        <p className="small-text">Étude gratuitement réalisée</p>
        <h3>Avantages</h3>
        <ul>
          <li>Panneaux solaires à haut rendement de dernière génération</li>
          <li>Gestionnaire d'énergie intelligent inclus</li>
          <li>Compatible avec une batterie solaire</li>
          <li>Garanties économiques de 10 ans</li>
          <li>Installation de qualité par technicien RGE Sunline</li>
        </ul>
      </div>
      
    </div>
  );
};

export default ProductDetails;
