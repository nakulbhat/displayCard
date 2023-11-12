import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

const Socials = () => (
    <div className='my-5 w-full flex justify-evenly [&>*]:text-4xl [&>*]:text-white [&>*]:transition hover:[&>*]:scale-150'>
        <AiFillLinkedin className='hover:text-[#2F80ED]'/>
        <AiFillGithub className='hover:text-[#2F3337]' />
        <AiFillInstagram className='hover:text-pink-500' />
        <IoLogoWhatsapp  className=' hover:text-green-500'/>
    </div>
)

export default Socials
