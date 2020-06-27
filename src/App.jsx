import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../src/components/page/page404";
import LoginRegister from "./LoginRegister";
import Acceuil from "./components/page/home";
import Tab from "./components/page/tabs";
import profil from "./components/page/profil";
import barber from "./components/page/barberSpace";
import reservation from "./components/page/Reservation";
import MyReservation from "./components/page/MyReservation";
import coiffeur from "./components/page/coiffeur"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginRegister}></Route>
          <Route exact path="/acceuil" component={Acceuil}></Route>
          
          <Route exact path="/reservation" component={reservation}></Route>
          <Route exact path="/Myreservation" component={MyReservation}></Route>
          <Route exact path="/tab" component={Tab}></Route>
          <Route exact path="/profil" component={profil}></Route>
          <Route exact path="/barberSpace" component={barber}></Route>
          <Route exact path="/coiffeur" component={coiffeur}></Route>
          <Route path="/Not" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
