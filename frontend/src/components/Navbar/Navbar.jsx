import React from 'react';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
const Navbar = () => {
  return (
    <div className='flex justify-around shadow-[0_1px_3px_-2px_rgba(1,1,1)] '>
       <div className='flex items-center'>
        <img src={logo} alt='logo'  />
        <p className='decoration-black text-[35px] font-[300]'>shopi</p>
       </div>
       <ul className='flex justify-center items-center text-[20px] gap-[50px] ' >
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '>Shop</li>
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '>Men</li>
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '>Women</li>
          <li className='cursor-pointer text-[20px] gap-[50px] text-[20px] hover:text-[18px] hover:border-b-2 border-red-600 '>Kids</li>
        </ul>
       <div className='flex justify-center items-center '>
          <button className='px-[20px] py-[3px] border-2 border-black-500 h-[30px]'>Login</button>
       <img  className=' h-[30px] px-[20px]' src={cart_icon} alt='cart'  />
       </div>
    </div>
  )
}

export default Navbar
