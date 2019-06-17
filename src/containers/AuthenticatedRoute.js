import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SIGN_IN } from "../constants/routes";

export default ({ component: C, props: cProps, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            cProps.isAuthenticated
                ? <C {...props} {...cProps} />
                : <Redirect
                    to={`${SIGN_IN}?redirect=${props.location.pathname}${props.location.search}`}
                />}
    />;