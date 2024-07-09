import React from 'react';
import '../ProductDetails1/ProductDetails1.css';
import solarPanelImage from '../../assets/website/photo10.png'; // Assurez-vous d'avoir une image appropriée dans ce chemin

const ProductDetails1 = () => {
  return (
    <div className="product-details">
      <div className="left-column">
        <h1>Gamme SunPrime</h1>
        <p>Le solaire de dernière génération garantie 30 ans, à performances exceptionnelles et au<br></br> design élégant</p>
        <img src={solarPanelImage} alt="Solar Panel" />
      </div>
      <div className="right-column">
        <h2>À partir de 10 430 €</h2>
        <p>TVA incluse</p>
        <p >Livrée et posé – Prime à l’autoconsommation déduite</p>
        <button> Demander un devis</button>
        <p className="small-text">Etre gratuitement rappelé</p>
        <h3>Avantages</h3>
        <ul>
          <li>Panneaux solaires de très haut rendement garantis 30 ans et avec puissance garantie à 91.8% à 30 ans</li>
          <li>Gestionnaire d’énergie intelligent inclus (Arsun)</li>
          <li>Technologie photovoltaïque “Shingle” dernière génération</li>
          <li>Garanties d’économies de 10 ans</li>
          <li>Installation de qualité par technicien RGE Sunline</li>
        </ul>
      </div>
      
    </div>
  );
};

export default ProductDetails1;
