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
          <Route path='/servicio' component={IndividualServicio} />
          <Fragment>

            <Route path='/subservicios' component={Servicios} />
            <Route path='/productos' component={Productos} />
            <Route path='/portafolio' component={Portafolio} />

            <Route path='/' exact component={Home} />


            <Footer />

          </Fragment>

        </Switch>
      </div>
    </Router>
  )

}
export default App
