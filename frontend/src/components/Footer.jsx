import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="px-5 md:px-20 py-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
        {/* Brand Info */}
        <div>
          <Link to='/'>
            <img src={assets.logo} className='w-32 mb-5 cursor-pointer' alt="Trendify" />
          </Link>
          <p className='text-gray-600 md:w-2/3'>
            Thank you for shopping with Trendify! We're dedicated to bringing you the latest trends and top-quality products. Follow us on social media for updates on new arrivals, exclusive offers, and more.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About Us</li></Link>
            <Link to='/about'><li>Delivery</li></Link>
            <Link to='/about'><li>Privacy & Policy</li></Link>
          </ul>
        </div>

        {/* GET IN TOUCH Section */}
        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 7061521143</li>
            <li>contact.trendify@info.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom - Black Background Section */}
      <div className='bg-black mt-10 text-sm text-center text-gray-400 pt-5'>
        <p className='pb-3'>
          Developed By <u className='text-white'>Prince Kumar</u>. Copyright 2025 Trendify. All rights reserved.
        </p>

        <div className='flex justify-center gap-6 text-lg pb-5'>
          <a href="https://www.linkedin.com/in/prince-kumar-455284260/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/princekumar39" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://imprincekumar.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGlobe />
          </a>
          <a href="mailto:singhaniaprince39@gmail.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
