import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAccessToken, isFalsyValue } from '../utils/common';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isFalsyValue(getAccessToken()) && restricted) {
          return <Redirect to="/dashboard" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  );
};

export default PublicRoute;