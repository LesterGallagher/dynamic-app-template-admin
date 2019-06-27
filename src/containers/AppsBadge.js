import React, { Component } from 'react';
import AppsBadgeComponent from '../components/AppsBadge/AppsBadge';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { get } from 'lodash';
import * as ROUTES from '../constants/routes';
import { defaultAppPublic } from '../constants/app-public';

class AppsBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { appKey, appPublic } = this.props;
        const linkTo = ROUTES.SPECIFIC_APP.replace(':appId', appKey);
        return (<div>
            <AppsBadgeComponent linkTo={linkTo} appPublic={appPublic} appKey={appKey} />
        </div>);
    }
}

const enhance = compose(
    connect(({ firebase: { auth } }) => ({ auth })),
    firebaseConnect(({ appKey, auth }) => ([
        `/users/${auth.uid}/apps/${appKey}/public`,
    ])),
    connect((state, props) => ({
        appPublic: get(state.firebase, `users/${state.firebase.auth.uid}/apps/${props.appKey}/public`, defaultAppPublic),
    })),
)

export default enhance(AppsBadge);
