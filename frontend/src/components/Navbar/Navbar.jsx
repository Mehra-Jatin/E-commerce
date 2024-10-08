import React from 'react';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex justify-around shadow-[0_1px_3px_-2px_rgba(1,1,1)] '>
       <div className='flex items-center'>
        <img src={logo} alt='logo'  />
        <p className='decoration-black text-[35px] font-[300]'>shopi</p>
       </div>
       <ul className='flex justify-center items-center text-[20px] gap-[50px] ' >
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '> <Link to="/">Shop</Link></li>
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '><Link to="/men">Men</Link></li>
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '><Link to="/women">Women</Link></li>
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '><Link to="/kids">Kids</Link></li>
        </ul>
       <div className='flex justify-center items-center '>
          <button className='px-[20px] py-[3px] border-2 border-black-500 h-[30px] rounded-[10px]'><Link to="/login">Login</Link></button>
      <Link to="/cart"> <img  className=' h-[30px] px-[20px]' src={cart_icon} alt='cart'  /></Link>
       <div className='h-[20px] w-[20px] border-2 rounded-[9px] flex justify-center items-center bg-red-600 text-white ml-[-28px] mt-[-13px]'>0</div>
       </div>
    </div>
  )
}

export default Navbar
