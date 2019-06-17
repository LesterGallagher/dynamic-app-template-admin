
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import asyncComponent from './AsyncComponent';
import * as ROUTES from '../constants/routes';

const Home = asyncComponent(() => import('./Home'));
const Singin = asyncComponent(() => import('./Signin'));
const AppsList = asyncComponent(() => import('./AppsList'));
const SpecificApp = asyncComponent(() => import('./SpecificApp'));

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { childProps } = this.props;

        return ( 
            <Router>
                <AppliedRoute exact path={ROUTES.HOME} component={Home} props={childProps} />
                <UnauthenticatedRoute exact path={ROUTES.SIGN_IN} component={Singin} props={childProps} />
                <AuthenticatedRoute exact path={ROUTES.APPS} component={AppsList} props={childProps} />
                <AuthenticatedRoute path={ROUTES.SPECIFIC_APP} component={SpecificApp} props={childProps} />
            </Router>
         );
    }
}

export default Routes;
