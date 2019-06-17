import React, { Component } from 'react';
import styles from './DetailItemSettings.module.css';
import { Button, Form, FormGroup, FormControl, HelpBlock, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import SchemaForm from "react-jsonschema-form";
import jsonSchema from './schema';
import uiSchema from './ui-schema';
import propTypes from 'prop-types';
import _pica from 'pica';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const pica = _pica();

class DetailItemSettings extends Component {
    constructor(props) {
        super();
        this.state = {
        };

        this.formData = props.appPublic
        console.log(props);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    handleSubmit = ({ formData }) => {
        const { setAppPublic } = this.props;

        setAppPublic(formData)
    }

    componentWillUpdate = nextProps => {
        console.log('nextProsp', nextProps);
        this.formData = nextProps.appPublic;
    }

    handleError = e => {
        console.log(e);
        toast('Er zijn problemen met je formulier :( Scroll naar de bovenkant van het formulier om ze te bekijken.')
    }

    handleChange = ({ formData }) => {
        this.formData = formData;
    }

    render() {
        const { appUrl } = this.props;

        return (
            <div className={styles.DetailItemSettings}>
                <Grid fluid>
                    <Row>
                        <Col>
                            <SchemaForm
                                schema={jsonSchema}
                                uiSchema={uiSchema}
                                formData={this.formData}
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                onError={this.handleError}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

DetailItemSettings.propTypes = {
    appPublic: propTypes.object.isRequired,
    setAppPublic: propTypes.func.isRequired,
};

export default DetailItemSettings;
