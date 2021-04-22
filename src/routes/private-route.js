import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken, isFalsyValue } from "../utils/common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isFalsyValue(getAccessToken())) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
