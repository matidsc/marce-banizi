import logo from '../img/logoPrincipal.jpeg'
import style from '../style/StyleNavBar.css'
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showProductos, showServices, showNavBar } from '../redux/navState';
import { useDispatch } from 'react-redux';

import ServiciosLista from '../samples/servicios.json'

const NavBar = () => {

    const { varShow, varShowProductos, varShowServices } = useSelector((state) => state.navState)

    const dispatch = useDispatch()
    console.log('SERVICIOS: '+varShowServices)    
    console.log('PRODUCTOS: '+varShowProductos)
   
    return (

        <>
            <nav style={varShow ? { zIndex: "3", borderRadius: '0' } : { borderRadius: '0 0 20px 20px', zIndex: "3" }} >
                <HiMenuAlt2 size="40" className='hamburger' onClick={() => dispatch(showNavBar())} />
                <img src={logo} className='logoNavBar' />
                <div className='navBarLinks' id={varShow ? 'show' : 'hidden'}>

                    <ul>
                        <li onClick={() => dispatch(showNavBar())}><Link to='/' >Inicio</Link></li>

                        <div className='dropdown'><li onClick={() => dispatch(showServices())}>Servicios</li>
                            <ul id={varShowServices ? 'subshow' : 'subhidden'}>
                                {ServiciosLista.map(servicio =>

                                    <li key={servicio.id} onClick={() => { dispatch(showNavBar()) }}><Link to=

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
                                                    imagen: logo,
                                                    precio: servicio.Precio,
                                                    descripcion: servicio.Descripcion
                                                }

                                            }}
                                    >{servicio.Servicio}</Link></li>
                                )}
                            </ul>
                        </div>
                        <li onClick={() => dispatch(showProductos())}>Productos

                            <ul id={varShowProductos ? 'subshow' : 'subhidden'}>
                                <li>
                                    LIDHERMA
                                </li>
                                <li>
                                    EXEL
                                </li>
                                <li>
                                    TODOS
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link to='/portafolio'>Portafolio</Link>

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