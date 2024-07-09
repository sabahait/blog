import React from 'react'
import logo1 from '../../assets/website/logo1.jpg'
import '../Navbar/Navbar.css'
const Menu = [
  {
    id:1,
    name:"Garanties",
    link:"/#"
  },
  {
    id:2,
    name:"Avis",
    link:"/#Avis"
  },
  {
    id:3,
    name:"BLog",
    link:"/#BLog"
  },
  {
    id:4,
    name:"Nous contacter",
    link:"/#Nous contact"
  },
]
const Navbar = () => {
  return (
    <div className='shadow-lg h-12'>
      <div className="container">
        <div className="flex justify-between items-center h-12">
          <div className=''>
            <a href='#' className='font-boldt ' >
              <img src={logo1} alt="" className='W-8 h-12'/>
            </a>
          </div>
          <ul className='items-center gap-4 hidden sm:flex '>
           {
            Menu.map((menu) => (
            <li>
              <a href={menu.link} className=' inline-block  hover:text-primary duration-200 hover:yellow duration-300 '>{menu.name}</a>
            </li>
          ))}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
