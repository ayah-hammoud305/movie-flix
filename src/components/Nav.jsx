import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className='bg-color'>
    <nav>
        <div className="nav__container">
            <div className="nav__logo--container">
                <a href="/" >
                <FontAwesomeIcon className='nav__logo--img' icon='clapperboard' />
                </a>
            <h1 className='nav__logo--text'>Movie<span className='red'>Flix</span></h1>
            </div>
            <ul className='nav__links'>
                <li className='nav__link home'>
                    <a className='nav__link' href='/' >Home</a>
                </li>
                <li className='nav__link contact'>
                    <button className='nav__btn'>Contact Us</button>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Nav