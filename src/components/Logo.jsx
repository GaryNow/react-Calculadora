import React from "react";
import logo from '../assets/imgs/logo.png'
import '../stylesheets/Logo.css'

const Logo = () => (
  <div className='freecodecamp-logo-contenedor'>
    <img
      src={logo}
      className='freecodecamp-logo'
      alt='Logo de freeCodeCamp' />
  </div>
)

export default Logo

