import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMap from './NavMap';
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home';
import AdminHome from '../admin/Admin';
import Newsfeed from '../newsfeed/Newsfeed';

function NoMatch() {
  return (
    <div>
      <h1>Dont Go here</h1>
    </div>
  );
}


export default function Nav() {
  return (
    <Router>
      <NavMap />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/newsfeed" component={Newsfeed} />
        <Route path="/admin" component={AdminHome} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  )
}