import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home";
import NotFound from "./404/404";


export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
    </Switch>;
