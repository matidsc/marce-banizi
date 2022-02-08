import logo from '../img/logoPrincipalDark.jpeg'
import '../style/StyleNavBar.css'
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showServices, showNavBar } from '../redux/navState';
import { useDispatch } from 'react-redux';
import ServiciosLista from '../JSON/servicios.json'

const NavBar = () => {

    const { varShow, varShowProductos, varShowServices } = useSelector((state) => state.navState)
    const dispatch = useDispatch()

    return (

        <>
            <nav style={varShow ? { zIndex: "3", borderRadius: '0' } : { borderRadius: '0 0 20px 20px', zIndex: "3" }} >
                <HiMenuAlt2 size="40" className='hamburger' onClick={() => dispatch(showNavBar())} />
                <img src={logo} className='logoNavBar' />
                <div className='navBarLinks' id={varShow ? 'show' : 'hidden'}>
        
                    <ul>
                        <li onClick={() => dispatch(showNavBar())}><Link to='/'>Inicio</Link></li>

                        <div><li onClick={() => dispatch(showServices())}><a>Servicios</a></li>
                            <ul className='prueba' id={varShowServices ? 'subshow' : 'subhidden'}>
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