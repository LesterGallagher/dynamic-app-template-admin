import React, { Component } from 'react';
import Page from './Page';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { get } from 'lodash';
import * as ROUTES from '../constants/routes';
import propTypes from 'prop-types';
import SpecificAppComponent from '../components/SpecificApp/SpecificApp';
import CMS from './CMS';
import { defaultAppPublic } from '../constants/app-public';

class SpecificApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { match: { params: { appId } }, auth: { uid } } = this.props;
        console.log('SPECIFIC APP', this.props)
        return (<Page>
            <SpecificAppComponent
                renderCMS={() => <CMS adminId={uid} appKey={appId} />} 
                appKey={appId} />
        </Page>);
    }
}

const enhance = compose(
    connect(({ firebase: { auth } }) => ({ auth })),
    firebaseConnect(({ match: { params: { appId } }, auth }) => ([
        `/users/${auth.uid}/apps/${appId}/public`,
    ])),
    connect(({ appKey, firebase, firebase: { auth } }) => ({
        appPublic: get(firebase, `users/${auth.uid}/apps/${appKey}/public`, defaultAppPublic),
    }))
)

SpecificApp.propTypes = {
    appPublic: propTypes.any,
};

export default enhance(SpecificApp);