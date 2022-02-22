import { AiOutlineWhatsApp,AiOutlineInstagram,AiOutlineEnvironment,AiOutlineMail } from "react-icons/ai";
import '../style/Footer.css'
import React from 'react'
const Footer = () => {

    return (

        <footer id='contacto'>
            <h2>Contacto</h2>
            <div className='footerWrapper'>
                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=59895457744">
                    <AiOutlineWhatsApp className='icon' />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:marcebanizi.estudio@gmail.com">
                    <AiOutlineMail  className='icon' />
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marcebanizi.estudio/">
                    <AiOutlineInstagram  className='icon' />
                </a>
                <div id="locationIcon" >
                    <AiOutlineEnvironment title ='hola' className='icon' />
                </div>
                                

            </div>
        </footer>)






}
export default Footer