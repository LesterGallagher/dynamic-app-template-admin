import React, { Component } from 'react';
import styles from './Page.module.css';
import Layout from '../Layout/Layout';
import { Grid, Row, Col } from 'react-bootstrap';

class Page extends Component {
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
        return (
            <div className={styles.Page}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} className="nopadding">
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Page;
