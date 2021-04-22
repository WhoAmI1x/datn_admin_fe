/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

const routes = [
    {
        path: "/",
        component: Login,
        restricted: true
    },
    {
        path: "/dashboard",
        component: Dashboard,
        isPrivate: true
    },
    {
        path: "*",
        component: NotFound
    }
];

export default () => (
    <Switch>
        {routes.map(({ path, exact = true, component, isPrivate, restricted }, index) => {
            if (isPrivate) {
                return (
                    <PrivateRoute
                        key={index}
                        path={path}
                        exact={exact}
                        component={component}
                    />
                );
            } else {
                return (
                    <PublicRoute
                        key={index}
                        path={path}
                        exact={exact}
                        component={component}
                        restricted={restricted}
                    />
                );
            }
        })}
    </Switch>
);
