import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home";
import NotFound from "./404/404";
import Login from "./Login/Login";


export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />

        <Route component={NotFound} />
    </Switch>;
