import React from 'react'
import profilePicture from '../../public/assets/profilePicture.jpeg'

const AboutSection = () => {
  return (
    <div >
      <img src= {profilePicture} className=' rounded-lg shadow-lg'></img>
        <h1 className='text-3xl text-center font-bold text-white'>Nakul Bhat</h1>
        <h2 className='text-md text-center text-white'>Frontend Developer</h2>
        <h3 className='text-l text-center font-light text-white'><a href="https://nakulbhat.github.io">nakulbhat.github.io</a></h3>
    </div>
  )
}

export default AboutSection
