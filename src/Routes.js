import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import AppliedRoute  from  "./components/AppliedRoute"
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute exact path="/" component={Home} props={childProps}/>
    <AppliedRoute exact path="/login" component={Login} props={childProps}/>
    <AppliedRoute exact path="/signup" component={SignUp} props={childProps}/>
    <AppliedRoute exact path="/notes/new" component={NewNote} props={childProps} />
    <Route component={NotFound} />
  </Switch>;