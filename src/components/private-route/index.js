import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) =>
  isAuthenticated ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: rest.location },
      }}
    />
  );

const mapStateToProps = ({ authReducer: { isAuthenticated } }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
