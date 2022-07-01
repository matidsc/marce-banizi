import "../src/App.css";
import NavBar from "./components/navBar";
import React, { Fragment } from "react";
import Footer from "./components/footer";
import Servicios from "./Pages/Servicios";
import Home from "./Pages/Home";
import Portafolio from "./Pages/Portafolio";
import ResetScroll from "./components/resetScroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndividualServicio from "./components/individualServicio";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <Router>
      <ResetScroll/>
      <NavBar />
      <div className="App">
        <Switch>

          <Route path="/servicio/:idServicio" component={IndividualServicio} />
          <Route
            path="/servicios/subservicio/:idSubservicio"
            component={IndividualServicio}
          />
          <Route path="/notFound" component={NotFound} />
          <Fragment>
            <Route path="/servicios/:idServicios" component={Servicios} />
            <Route path="/portafolio" component={Portafolio} />

            <Route path="/" exact component={Home} />
            <Footer />
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
