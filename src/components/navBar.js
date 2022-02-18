import logo from '../img/logoPrincipalDark.jpeg'
import '../style/StyleNavBar.css'
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showServices, showNavBar } from '../redux/navState';
import { useDispatch } from 'react-redux';
import ServiciosLista from '../JSON/servicios.json'

const NavBar = () => {

    const { varShow, varShowServices } = useSelector((state) => state.navState)
    const dispatch = useDispatch()
    {varShow?document.body.style.overflowY = "hidden":document.body.style.overflowY = "scroll"}
    return (

        <>
            <nav style={varShow ? { zIndex: "3", borderRadius: '0' } : { borderRadius: '0 0 20px 20px', zIndex: "3" }} >
                <HiMenuAlt2 size="30" className='hamburger' onClick={() => dispatch(showNavBar())} />
                <img src={logo} className='logoNavBar' />
                <div className='navBarLinks' id={varShow ? 'show' : 'hidden'}>
        
                    <ul>
                        <li onClick={() => dispatch(showNavBar())}><Link className='item' to='/'>Inicio</Link></li>

                        <div><li className='item'onClick={() => dispatch(showServices())}>Servicios</li>
                            <ul id={varShowServices ? 'subshow' : 'subhidden'}>
                                {ServiciosLista.map(servicio =>

                                    <li key={servicio.id}><Link to=

                                        {servicio.hasOwnProperty('Subservicios') ?
                                        
                                            {
                                                pathname: '/subservicios',
                                                state: {
                                                    servicio: servicio.Servicio,
                                                    subservicios: servicio.Subservicios

                                                }
                                            } :

                                            {
                                                pathname: '/servicio',
                                                state: {
                                                    nombre: servicio.Servicio,
                                                    imageList: servicio.imagenes,
                                                    precio: servicio.Precio,
                                                    descripcion: servicio.Descripcion
                                                }

                                            }}
                                    onClick={() =>{dispatch(showServices()); dispatch(showNavBar())} }>{servicio.Servicio}</Link></li>
                                )}
                            </ul>
                        </div>
                        
                        <li>
                            <Link onClick={()=>dispatch(showNavBar())} className='item' to='/portafolio'>Portafolio</Link>

                        </li>

                    </ul>

                </div>

            </nav>

            <div className='blurryBack' style={{
                display: varShow ? "block" : "none"
            }} >

            </div>
        </>
    )


}
export default NavBar;