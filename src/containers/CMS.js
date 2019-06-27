import React, { Component } from 'react';
import Page from './Page';
import { Link } from 'react-router-dom';
import { withFirebase, firebaseConnect, firestoreConnect, withFirestore, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { get } from 'lodash';
import * as ROUTES from '../constants/routes';
import CMSComponent from '../components/CMS/CMS';
import { defaultAppPublic } from '../constants/app-public';
import _slugify from 'slugify';
import { compose as recompose, withHandlers, withStateHandlers, lifecycle } from 'recompose'
import propTypes from 'prop-types';
import { createNewAppPage } from '../lib/app-pages';
import 'devices.css/dist/devices.css'
import icons from '../constants/icons';
import devices from '../constants/devices';

const slugify = str => _slugify(str, {
    replacement: '-',   // replace spaces with replacement
    remove: null,       // regex to remove characters
    lower: true         // result in lower case
});

class CMS extends Component {

    createDefaultAppPages = false;
    createDefaultAppPublic = false;

    constructor(props) {
        super(props);
        this.state = {
            deviceClassName: 'device-iphone-x',
            platform: 'ios'
        }

        console.log(props.appPublic)
    }

    ensureDefaultDataIsInDatabase = () => {
        const { setAppPublic, appPublic, appPages, setPage, appKey } = this.props;
        if (isLoaded(appPublic) && !appPublic) {
            if (this.createDefaultAppPublic) return;
            else this.createDefaultAppPublic = true;
            setAppPublic(defaultAppPublic);
        }
        if (isLoaded(appPages) && !appPages) {
            if (this.createDefaultAppPages) return;
            else this.createDefaultAppPages = true;
            const newPage = createNewAppPage('Home', appKey, true);
            setPage(newPage);
        }
    }

    componentDidMount = () => {
        this.ensureDefaultDataIsInDatabase();
    }

    componentDidUpdate = () => {
        this.ensureDefaultDataIsInDatabase();
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
        this.props.setPage(newPage);
    }

    onDeviceChange = device => {
        this.setState({
            deviceClassName: device.className,
            platform: device.platform,
            label: device.label,
            options: device.options
        })
    }

    render() {
        const { platform, deviceClassName } = this.state;
        const { appPublic, appPages, appKey, setPage, auth, setAppPublic } = this.props;

        const appUrl = `${process.env.REACT_APP_APP_DOMAIN}/?cacheBust=${deviceClassName}#/${auth.uid}/${appKey}/${deviceClassName}/${platform}`;

        console.log('APP_PAGES', appPages);

        return (
            <CMSComponent
                settingsPath={ROUTES.SPECIFIC_APP_SETTINGS.replace(':appId', appKey)}
                createPagePath={this.createPagePath}
                appPublic={appPublic || defaultAppPublic}
                appKey={appKey}
                appPages={getPages(appPages, appKey)}
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

const getPages = (appPages) => {
    if (isLoaded(appPages) && typeof appPages === 'object' && appPages !== null) {
        const array = Object.keys(appPages).map(id => ({ id, ...appPages[id] }));
        if (array && array.length > 0) return array;
    }
    return [];
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
    connect(({ firebase: { data: { users } }, firestore: { data: { appPages } } }, { appKey, adminId }) => ({
        appPublic: isLoaded(users) ? get(users, [adminId, 'apps', appKey, 'public'], null) : users,
        appPages: appPages
    })),
    withHandlers({
        setPage: props => (page) => {
            return console.log(page) || props.firestore.set(`appPages/${page.id}`, page);
        },
        setAppPublic: ({ firebase, appKey, auth: { uid } }) => (payload) => {
            return console.log(payload) || firebase.set(`users/${uid}/apps/${appKey}/public`, payload);
        }
    })
);

CMS.propTypes = {
    setPage: propTypes.func.isRequired,
    appPublic: propTypes.object,
    appKey: propTypes.string.isRequired,
    adminId: propTypes.string.isRequired,
    auth: propTypes.object.isRequired,
    setAppPublic: propTypes.func.isRequired,
}

export default enhance(CMS);

