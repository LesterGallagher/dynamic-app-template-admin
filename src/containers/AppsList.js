import React, { Component } from 'react';
import AppsListComponent from '../components/AppsList/AppsList'
import Layout from './Layout';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AppsBadge from './AppsBadge';
import Page from './Page';
import Loading from '../components/Loading/Loading';
import _slugify from 'slugify';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const slugify = str => _slugify(str, {
    replacement: '-',   // replace spaces with replacement
    remove: null,       // regex to remove characters
    lower: true         // result in lower case
});

class AppsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: []
        }

        if (props.isAuthenticated) this.getAppsShallow();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuthenticated && prevProps.isAuthenticated === false) this.getAppsShallow();
    }

    getAppsShallow = async () => {
        this.setState({ loading: true });

        const { firebase } = this.props;
        const idToken = await firebase.auth().currentUser.getIdToken(false)
        const { uid } = this.props.auth;
        const response = await fetch(`https://dynamic-template-app.firebaseio.com/users/${uid}/apps.json?shallow=true&auth=${idToken}`);
        const map = await response.json();
        const keys = Object.keys(map || {});

        this.setState({ keys, loading: false });
    }

    render() {
        const { keys, loading } = this.state;

        if (loading) return <Loading />

        return (
            <Page>
                <Grid style={{ paddingTop: '20px' }}>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Panel>
                                <Panel.Heading>Nieuwe App</Panel.Heading>
                                <Panel.Body>
                                    Maak een nieuwe app.
                                    <br />
                                    <br />
                                    <FormGroup>
                                        <ControlLabel>Naam van je nieuwe app</ControlLabel>
                                        <FormControl componentClass="input" type="text" inputRef={ref => this.ref = ref} />
                                    </FormGroup>
                                </Panel.Body>
                                <Panel.Footer>
                                    <Button onClick={() => {
                                        const slug = slugify(this.ref.value)
                                        this.props.history.push(ROUTES.SPECIFIC_APP_OVERVIEW.replace(':appId', slug))
                                    }} bsStyle="primary">Maak</Button>
                                </Panel.Footer>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        {keys.map(key => {
                            return (
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <AppsBadge key={key} appKey={key} />
                                </Col>
                            );
                        })}
                    </Row>
                </Grid>
            </Page>
        );
    }
}

const enhance = compose(
    firebaseConnect(),
    withRouter,
    connect(
        // Map redux state to component props
        ({ firebase: { auth } }) => ({
            auth,
        })
    )
)
export default enhance(AppsList);