import React from 'react'
import img1 from './images/ggg.jpg'
function Navbar() {
  return (
    <div className='navbar' id="obj">
          <div className="logo">
            <img src={img1} alt="rakesh" />
          </div>
          <ul id="menu">
            <li><a href="">Home</a></li>
            <li><a href="">Dishes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            
            
            <button className="w-btn">login</button>
          </ul>
          
    </div>
  )
}

export default Navbar