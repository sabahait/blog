import React from 'react'
import photo3 from '../../assets/website/photo3.jpg'
import photo4 from '../../assets/website/photo4.jpg'
import '../Section1/Section1.css'
const Section1 = () => {
  return (
    <div className=''>
      <div className="image-container W-full h-full">
        <img src={photo3} alt="3D Effect" />
      </div>
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
                <button className="cta-button">Découvrir Garanties</button>
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
