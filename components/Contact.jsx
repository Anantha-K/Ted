import React from 'react'
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import '../styles/Contact.css'


const Contact = () => {
  return (
    <div className='Contact'>
        <h1>Contact Us</h1>
        <div>
            <ul className='list'>
            <li>
                <CiPhone />
                </li>
                <li>
                <MdOutlineEmail />
                </li>
                <li>
                <FaInstagram />
                </li>

            </ul>

            
        </div>
    </div>
  )
}

export default Contact