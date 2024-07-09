import React from 'react'
import Photo13 from '../../assets/website/Photo13.png'
import '../Description/Description.css'
import Photo14 from '../../assets/website/Photo14.png';
import Photo15 from '../../assets/website/Photo15.png';
const Description = () => {
  return (
    <div className='Content1'>
        <div className='container1'>
<<<<<<< HEAD
                <img src={Photo13} alt="" />
                <div><h1 >On vous garantit votre baisse
                <br></br>de facture pendant 10 ans</h1>
                <p>Avec la garantie de conformité d’estimation de production, si votre production solaire annuelle est
                inférieure durant les 10 premières années à 85 % de ce que nous avons prévu lors de notre étude personnalisée,
                on vous rembourse la différence.</p></div>
                
        </div>
        <h1>Descriptif technique détaillé pour la gamme SunEco</h1>
    <div className='phopho'> <img className='phopho1'src={Photo14} alt="" />
              
        <img className='phopho2'src={Photo15} alt="" />
        </div>
                   
               
=======
             <table>
            <tr>
                <td className='image2'>
                <img src={Photo13} alt="" />
                </td>
                <td>
                <h1>On vous garantit votre baisse
                <br></br>de facture pendant 10 ans</h1>
                <p>Avec la garantie de conformité d’estimation de production, si votre production solaire annuelle est
                inférieure durant les 10 premières années à 85 % de ce que nous avons prévu lors de notre étude personnalisée,
                on vous rembourse la différence.</p>
                </td>
            </tr>
        </table>
        </div>
        <h1>Descriptif technique détaillé pour la gamme SunEco</h1>
        <table className='image'>
            <tr>
              
                 <td >
                    <img src={Photo14} alt="" />
                </td>
                <td >
                    <img src={Photo15} alt="" />
                </td>
              
               
            </tr>
        </table>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
       
    </div>
  )
}

export default Description
