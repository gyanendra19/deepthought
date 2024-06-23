import React from 'react'
import { RiHome8Fill, RiNotification2Fill, RiToolsFill, RiMore2Line } from '@remixicon/react'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='nav-inside'>
            <div className='nav-logo'>
                <img src="./logo-1.png" alt="" />
            </div>
            <div className='nav-right'>
                <div className='logo'><RiHome8Fill size={20} color='white'/></div>
                <div className='logo'><RiToolsFill size={20} color='white'/></div>
                <div className='logo'><RiNotification2Fill size={20} color='white'/></div>
                <img src="./girl.jpeg" alt="" />
                <div><RiMore2Line /></div>
            </div>
        </div>
    </nav>
  )
}

export default Nav