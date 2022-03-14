import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Keren Oz</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />

        <div className='photo'>
          <img src={ME} alt='photo' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
