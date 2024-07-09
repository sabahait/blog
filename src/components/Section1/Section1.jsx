import React from 'react'
<<<<<<< HEAD
import photo4 from '../../assets/website/photo4.jpg'
import '../Section1/Section1.css'
import { useNavigate } from 'react-router-dom';

const Section1 = () => {
  const navigate = useNavigate();

const handlButtonClic = () => {
  navigate('/PageGaranties');
};
  return (
    <div className='container2'>
     
=======
import photo3 from '../../assets/website/photo3.jpg'
import photo4 from '../../assets/website/photo4.jpg'
import '../Section1/Section1.css'
const Section1 = () => {
  return (
    <div className=''>
      <div className="image-container W-full h-full">
        <img src={photo3} alt="3D Effect" />
      </div>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
      <table >
            <tr>
                <td>
          <div className="text-content">
          <h1>Sunline ; l'expert du Solaire en<br></br> Nouvelle-Aquitaine</h1>
          <p>
            Sunline est une entreprise de référence dans le milieu du solaire
            <br></br> 
            et des énergies renouvelables. Sunline s'est donné pour objectif
            <br></br>
             de rendre le solaire accessible à tous, en offrant le meilleur 
            <br></br>
            compromis entre prix, rentabilité et performance.
          </p>
          <br></br>
<<<<<<< HEAD
                <button onClick={handlButtonClic} className="cta-buttonED" >Découvrir Garanties</button>
=======
                <button className="cta-button">Découvrir Garanties</button>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
          </div>
            </td>
                <td className='image'>
                <img src={photo4} alt="Energy"/>
                </td>
            </tr>
        </table>
        <div className="statistics">
         <div className="stat-item1">
          <h1>4</h1>
          <p>ans d'expertise solaire</p>
        </div>
        <div className="stat-item">
          <h1>319</h1>
          <p>installations solaires réalisées</p>
        </div>
        <div className="stat-item1">
          <h1>1261</h1>
          <p>panneaux solaires installés</p>
        </div>
        <div className="stat-item">
          <h1>1</h1>
          <p>MW installés en Nouvelle-Aquitaine</p>
        </div>
      </div>
    </div>
  )
}

export default Section1
