import './App.css';
import NavBar from './components/navBar';
import React, { Fragment } from 'react';
import logoSec from './img/logoSecundario.jpeg'
import Footer from './components/footer'
import Servicios from './Pages/Servicios'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import Servicio from './components/servicio';
import ServicioIndividual from './components/individualServicio'
import Portafolio from './Pages/Portafolio';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IndividualServicio from './components/individualServicio';

export default App=>{

  /* <Servicio title='Maquillaje profesional' subtitles={['Maquillaje Social', 'Novias', '15 años',]} descriptions={['Si sos invitada o tenés un evento','','']}/>(*/
  /*             <Route path='/servicios' render={(props) => <Servicios {...props} title={`Props through render`}} ></Route>
  */


    return (
      <Router>
        <NavBar/>
        <div className='App'>

          <Switch>
          <Route path="/servicio" component={() => <IndividualServicio />} />
        
            <Fragment>

              <Route path="/subservicios" component={() => <Servicios/>} />

              <Route path='/productos' component={() => <Productos />} />
              <Route path='/marce-banizi' exact component={Home}/>
              <Route path='/portafolio' component={()=><Portafolio/>}/>
              <Footer/>

            </Fragment>

          </Switch>
        </div>
      </Router>
    )

  

}

