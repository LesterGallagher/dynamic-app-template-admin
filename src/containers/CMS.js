import React, { Component } from 'react';
import Page from './Page';
import { Link } from 'react-router-dom';
import { withFirebase, firebaseConnect, firestoreConnect, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { get } from 'lodash';
import * as ROUTES from '../constants/routes';
import CMSComponent from '../components/CMS/CMS';
import { defaultAppPublic } from '../constants/app-public';
import _slugify from 'slugify';
import { compose as recompose, withHandlers, withStateHandlers, lifecycle } from 'recompose'
import propTypes from 'prop-types';
import { createDefaultAppPages, createNewAppPage } from '../lib/app-pages';
import 'devices.css/dist/devices.css'
import icons from '../constants/icons';
import devices from '../constants/devices';

const slugify = str => _slugify(str, {
    replacement: '-',   // replace spaces with replacement
    remove: null,       // regex to remove characters
    lower: true         // result in lower case
});

class CMS extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isIPhoneX: true,
            deviceClassName: 'device-iphone-x',
            platform: 'ios'
        }

        console.log(props.appPublic)
    }

    createPagePath = ({ frontmatter: { title } }) => {
        const { appKey } = this.props;

        return ROUTES.SPECIFIC_APP_PAGE
            .replace(':appId', appKey)
            .replace(':appPage', slugify(title))
    }

    onNewPage = ({ name }) => {
        const { appKey } = this.props;
        const newPage = createNewAppPage(name, appKey);
        this.props.setPage(newPage.id, newPage);
    }

    onDeviceChange = device => {
        this.setState({
            deviceClassName: device.className,
            platform: device.platform,
            isIPhoneX: device.isIPhoneX
        })
    }

    render() {
        const { isIPhoneX, platform, deviceClassName } = this.state;
        const { appPublic, appPages, appKey, setPage, auth, setAppPublic } = this.props;

        const appUrl = `${process.env.REACT_APP_APP_DOMAIN}/${auth.uid}/${appKey}/${isIPhoneX}/${platform}`;

        return (
            <CMSComponent
                settingsPath={ROUTES.SPECIFIC_APP_SETTINGS.replace(':appId', appKey)}
                createPagePath={this.createPagePath}
                appPublic={appPublic || defaultAppPublic}
                appKey={appKey}
                appPages={appPages}
                onNewPage={this.onNewPage}
                appUrl={appUrl}
                setAppPublic={setAppPublic}
                icons={icons}
                devices={devices}
                deviceClassName={deviceClassName}
                onDeviceChange={this.onDeviceChange}
                overviewUrl={ROUTES.SPECIFIC_APP_OVERVIEW.replace(':appId', appKey)}
                setPage={setPage} />
        );
    }
}

const getPages = (appPages, appKey) => {
    if (typeof appPages === 'object' && appPages !== null) {
        const array = Object.keys(appPages).map(id => ({ id, ...appPages[id] }));
        if (!array || array.length === 0) return createDefaultAppPages(appKey);
        else return array;
    } else if (appPages === null) return createDefaultAppPages(appKey);
    else return [];
}

const enhance = compose(
    connect(({ firebase: { auth }, firebase }) => ({ auth, firebase })),
    firestoreConnect(({ auth, appKey }) => [{
        collection: 'appPages', where: [
            ['uid', '==', auth.uid],
            ['appKey', '==', appKey]
        ]
    }]),
    firebaseConnect(({ auth, appKey }) => [
        console.log(`users/${auth.uid}/apps/${appKey}/public`) || `users/${auth.uid}/apps/${appKey}/public`
    ]),
    connect(({ firebase, firestore: { data: { appPages } } }, { appKey, auth }) => ({
        appPublic: get(firebase.data, ['users', auth.uid, 'apps', appKey, 'public'], defaultAppPublic),
        appPages: getPages(appPages, appKey)
    })),
    withHandlers({
        setPage: props => (id, payload) => {
            return console.log(payload) || props.firestore.set(`appPages/${id}`, payload);
        },
        setAppPublic: ({ firebase, appKey, auth: { uid } }) => (payload) => {
            return console.log(payload) || firebase.set(`users/${uid}/apps/${appKey}/public`, payload);
        }
    })
);

CMS.propTypes = {
    setPage: propTypes.func.isRequired,
    appPages: propTypes.array.isRequired,
    appPublic: propTypes.object.isRequired,
    appKey: propTypes.string.isRequired,
    auth: propTypes.object.isRequired,
    setAppPublic: propTypes.func.isRequired,
}

export default enhance(CMS);

