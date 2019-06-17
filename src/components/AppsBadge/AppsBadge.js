import React, { Component } from 'react';
import styles from './AppsBadge.module.css';
import propTypes from 'prop-types';
import { Button, Panel, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppsBadge extends Component {
    constructor(props) {
        super();
        this.state = {
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { appKey, uiTemplate, appPublic, linkTo } = this.props;

        return (
            <div className={styles.AppsBadge}>
                <Panel>
                    <Panel.Heading>{appKey}</Panel.Heading>
                    <Panel.Body>

                        <Button to={linkTo} componentClass={Link}>Aanpassen</Button>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

AppsBadge.propTypes = {
    appKey: propTypes.string.isRequired,
    uiTemplate: propTypes.any,
    appPublic: propTypes.any,
    linkTo: propTypes.string
};

export default AppsBadge;
