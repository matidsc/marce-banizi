import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import '../style/styleFooter.css'
import React from 'react'

const Footer = () => {

    return (

        <footer id='contacto'>
            <h2>Contacto</h2>
            <div className='footerWrapper'>
                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=59895457744">
                    <AiOutlineWhatsApp size="40" className='iconFooter' />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marcebanizi.estudio/">
                    <HiOutlineMail size="40" className='iconFooter' />
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marcebanizi.estudio/">
                    <AiOutlineInstagram size="40" className='iconFooter' />
                </a>

            </div>
        </footer>)






}
export default Footer