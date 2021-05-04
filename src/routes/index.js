/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import DiscountCode from "../pages/DiscountCode";
import DiscountCodeByCategory from "../pages/DiscountCodeByCategory";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import ProductByCategory from "../pages/ProductByCategory";
import ApiUrl from "../pages/ApiUrl";
import User from "../pages/User";
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
        path: "/user",
        component: User,
        isPrivate: true
    },
    {
        path: "/category",
        component: Category,
        isPrivate: true
    },
    {
        path: "/discount-code",
        component: DiscountCode,
        isPrivate: true
    },
    {
        path: "/discount-code/:ecommerce/:categoryId",
        component: DiscountCodeByCategory,
        isPrivate: true
    },
    {
        path: "/product",
        component: Product,
        isPrivate: true
    },
    {
        path: "/product/:ecommerce/:categoryId",
        component: ProductByCategory,
        isPrivate: true
    },
    {
        path: "/product/:productId",
        component: ProductDetail,
        isPrivate: true
    },
    {
        path: "/api-url",
        component: ApiUrl,
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
