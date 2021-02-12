import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMap from './NavMap';
import About from '../about/About'
import Contact from '../contact/Contact'
import OrgBio from '../orgbio/OrgBio'
import Home from '../home/Home';

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
        <Route path="/org-bio" component={OrgBio} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  )
}