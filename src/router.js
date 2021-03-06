import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Request from './components/Request/Request.js';
import Admin from './components/Admin/Admin.js';
import Pay from './components/Pay/Pay.js';

export default (
  <Switch>
    <Route component={ Home } exact path="/"  />
    <Route component={ About} path="/about" /> 
    <Route component={ Contact } path="/contact" />
    <Route component={ Request } path="/request" />
    <Route component={ Admin } path="/Admin" />
    <Route component={ Pay } path="/Pay" />
  </Switch>
)