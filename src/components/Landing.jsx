import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox';

const Landing = () => {


  return (
    <section id='landing'>
        <div className="landing__container">
            <h1 className="landing__title">
                Browse Your Favorite Movies
            </h1>
            <h3 className='landing__subtitle'>Endless movies, anytime, anywhere.</h3>
        </div>
    </section>
  )
}

export default Landing;