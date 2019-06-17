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

class SpecificApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { match: { params: { appId } }, uiTemplate, appPublic } = this.props;
        return (<Page>
            <SpecificAppComponent
                renderCMS={() => <CMS appKey={appId} />} 
                appKey={appId} 
                uiTemplate={uiTemplate} 
                appPublic={appPublic} />
        </Page>);
    }
}

const enhance = compose(
    connect(({ firebase: { auth } }) => ({ auth })),
    firebaseConnect(({ match: { params: { appId } }, auth }) => ([
        `/users/${auth.uid}/apps/${appId}/public`,
        `/users/${auth.uid}/apps/${appId}/uiTemplate`
    ])),
    connect(({ appKey, firebase, firebase: { auth } }) => ({
        appPublic: get(firebase, `users/${auth.uid}/apps/${appKey}/public`, null),
        uiTemplate: get(firebase, `users/${auth.uid}/apps/${appKey}/uiTemplate`, null)
    }))
)

SpecificApp.propTypes = {
    uiTemplate: propTypes.any,
    appPublic: propTypes.any,
};

export default enhance(SpecificApp);