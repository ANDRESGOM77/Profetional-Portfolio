import React from 'react'
import logo from "../assets/logo2 (2).png"

const Footer = () => {
  return (
    <footer className='z-10 border-l-transparent border-r-transparent text-white bg-primary'>
        <div className='container p-8 flex justify-between'>
            <div className='text-white text-3xl font-bold flex'>
                <img src={logo} alt="Logo" className="w-24 h-20 ml-4" />
            </div>
            <small>&copy; 2024 <b>Andres Gomez</b> - All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer