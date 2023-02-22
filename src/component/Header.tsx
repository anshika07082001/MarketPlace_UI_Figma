import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = () => {
  return (
    <section className='header align__center row'>
        <div className='header__logo'>
            <span className='fw500 fs14 logo__span'>YOUR LOGO</span>
        </div>
        <div className='header__links align__center row'>
            <div className='header__lists align__center row'>
                <span className='fw500 fs16'>Market Place</span>
            </div>
            <div className='header__lists align__center header__lists--blog row'>
                <span className='fw500 fs16'>Blog</span>
            </div>
            <div className='header__lists align__center header__lists--pricing row'>
                <span className='fw500 fs16'>Pricing</span>
            </div>
            <div className='header__lists align__center header__lists--about row'>
                <span className='fw500 fs16'>About</span>
            </div>
            <div className='header__lists align__center header__lists--contact row'>
                <span className='fw500 fs16'>Contact</span>
            </div>
        </div>
        <div className='header__profile align__center row'>
            <div className='header__profile align__center header__profile--shop row'>
                <ShoppingBagOutlinedIcon fontSize='large'/>
            </div>
            <div className='header__profile align__center header__profile--shop row'>
                <img src='Ellipse 67.png' alt=''/>
            </div>
        </div>
    </section>
  )
}

export default Header