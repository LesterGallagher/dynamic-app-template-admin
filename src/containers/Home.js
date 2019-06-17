
import React, { Component } from 'react';
import Page from './Page';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Page>
                <Grid>
                    <Row>
                        <Col xs={12} style={{ paddingTop: '30vh' }}>
                            <Panel>
                                <Panel.Body>
                                    <Panel.Title>Wil jij een eigen app maken?</Panel.Title>
                                    <br />
                                    Ontwerp gratis een nieuwe app en bereik meer klanten.
                                    <br />
                                    <br />
                                    <Button bsStyle="primary" to={ROUTES.APPS} componentClass={Link}>Maak een nieuwe app</Button>
                                    {' '}
                                    <Button bsStyle="success" to={ROUTES.APPS} componentClass={Link}>Bekijk je apps</Button>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </Page>
        )
    }
}

export default Home;

