import '../src/App.css'
import NavBar from './components/navBar';
import React, { Fragment } from 'react';
import Footer from './components/footer'
import Servicios from './Pages/Servicios'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import Portafolio from './Pages/Portafolio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import IndividualServicio from './components/individualServicio';

const App = () => {

  return (
    <Router>
      <NavBar/>
      <div className='App'>

        <Switch>
          <Route path='/servicio' component={IndividualServicio} />
          <Fragment>

            <Route path='/subservicios' component={Servicios} />
            <Route path='/productos' component={Productos} />
            <Route path='/' exact component={Home}/>

            <Route path='/portafolio' component={Portafolio} />

            <Footer />

          </Fragment>

        </Switch>
      </div>
    </Router>
  )

}
export default App
