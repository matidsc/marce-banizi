import '../src/App.css'
import NavBar from './components/navBar';
import React, { Fragment } from 'react';
import Footer from './components/footer'
import Servicios from './Pages/Servicios'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import Portafolio from './Pages/Portafolio';
import ResetScroll from './components/resetScroll';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import IndividualServicio from './components/individualServicio';

const App = () => {


  return (
    <Router>
      <ResetScroll/>
      <NavBar />
      <div className='App'>

        <Switch>
          <Route path='/marce-banizi/servicio/:id' component={IndividualServicio} />
          
          <Fragment>
            <Route path='/marce-banizi/servicios/:idServicios' component={Servicios} />
            <Route path='/marce-banizi/productos' component={Productos} />
            <Route path='/marce-banizi/portafolio' component={Portafolio} />

            <Route path='/marce-banizi' exact component={Home} />
            <Footer />

            </Fragment>
    
          

        </Switch>
      </div>
    </Router>
  )

}
export default App
