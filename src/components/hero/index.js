import React from 'react'
import Herocards from '../cards/index'
import './hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-about'>
      </div>
      <div className='hero-aboutus'></div>
      <div className='hero-cards'>
        <Herocards/>
        <Herocards/>
        <Herocards/>
        <Herocards/>
        <Herocards/>
      </div>
    </div>
  )
}

export default Hero
