import React from 'react'
import '../Hero/hero.css'
import ss1 from '../../assets/website/page1.jpg'
import photo1 from '../../assets/website/photo1.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/offers');
  };
<<<<<<< HEAD
  const handlButtonClick = () => {
    navigate('/allblogs');
  };
  const handlButtonClic = () => {
    navigate('/PageGaranties');
  };
    return (
      <div className='ToutPage'>
      <div className='shadow-lg h-80 relative '>
=======
    return (
      <div className='shadow-lg h-80 relative'>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
        {/* Hero image */}
        <img
          className='object-cover w-full h-full '
          src={ss1}
          alt='Hero Image'
        />
        
        {/* Overlay */}
        <div className='absolute inset-0 flex items-start justify-start p-8 bg-opacity-30 text-white'>
        <div className='text-left'>
            <h1 className='text-4xl font-bold  mb-4 '>Votre énergie solaire,</h1>
            <p className='text-4xl font-bold  mb-4'>Notre engagement durable</p>
<<<<<<< HEAD
            <button className='bg-gray-700 text-white py-2 px-4 rounded-full  'onClick={ handleButtonClick }>
=======
            <button className='bg-gray-900 text-white py-2 px-4 rounded-full  'onClick={ handleButtonClick } style={{ marginTop: '10px' }}>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
            Découvrez nos offres&gt;&gt;
          </button>
          </div>
        </div>
<<<<<<< HEAD
        <div className="squares-container">
        <div className="square ">
          <h3>Autoconsommation</h3>
          <p>L'autoconsommation solaire permet de produire et consommer sa propre électricité à partir du soleil. C'est une solution durable qui réduit les factures d'énergie, en optant pour l'énergie solaire ,vous contribuez activement à latransition énergétique</p>
          <a href="#" onClick={handleButtonClick}>Nos offres</a>
=======
        <div className="squares-container1">
        <div className="square ">
          <h3>Autoconsommation</h3>
          <p>L'autoconsommation solaire permet de produire et consommer sa propre électricité à partir du soleil. C'est une solution durable qui réduit les factures d'énergie, en optant pour l'énergie solaire ,vous contribuez activement à latransition énergétique</p>
          <a href="#">Nos offres</a>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
        </div>
        <div className="square">
          <h3>Qualité</h3>
          <p>Nous nous engageons à fournir des produits et des services de la plus haute qualité. Nous travaillons avec des fabricants réputés  et nous assurons que nos installations répondent aux normes les plus élevées.</p>
<<<<<<< HEAD
          <a href="#"  onClick={handlButtonClick}>Nos réalisations</a>
=======
          <a href="#">Nos réalisations</a>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
        </div>
        <div className="square">
          <h3>Service Client</h3>
          <p>Nous accordons une grande importance à la satisfaction de nos clients. Pendant 10ans, si vous ne faites pas les économies promises, on vous remnourse la différence.Nous vous offrons également la maintenance de votre installation pendant 5ans.</p>
<<<<<<< HEAD
          <a href="#" onClick={handlButtonClic}>Nos garanties</a>
        </div>
      </div>
      <div>
      <div className="ss1">
=======
          <a href="#">Nos garanties</a>
        </div>
      </div>
      <div>
      <div className="ss">
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
        <h1>Nos partenaires leader mondial du solaire</h1>
      </div>
      <div> 
        <img
          className="photo1"
          src={photo1}
          alt='logo'
        />
        </div>
      </div>
      </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
    );
  };
export default Hero
