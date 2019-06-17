import React, { Component } from 'react';
import styles from './ActionButtons.module.css';
import { ButtonGroup, Button, ButtonToolbar, Glyphicon, ToggleButton, ToggleButtonGroup, Modal, OverlayTrigger, Popover, Tooltip, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class ActionButtons extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
            name: ''
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    handleClose = () => {
        this.setState({ show: false, name: '' });
    }

    getValidationState = () => {
        const length = this.state.name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange = e => {
        const name = e.target.value;
        this.setState({ name })
    }

    handleNewPage = e => {
        const { name } = this.state;
        this.props.onNewPage({ name });
        this.handleClose();
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (
            <div {...this.props.style} className={styles.ActionButtons}>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button onClick={() => this.setState({ show: true })} bsSize="small" bsStyle="primary">
                            <Glyphicon glyph="plus" />
                        </Button>
                    </ButtonGroup>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={1} bsSize="small"><Glyphicon glyph="sort-by-alphabet" /></ToggleButton>
                        <ToggleButton value={2} bsSize="small"><Glyphicon glyph="sort-by-alphabet-alt" /></ToggleButton>
                        <ToggleButton value={3} bsSize="small"><Glyphicon glyph="sort-by-order" /></ToggleButton>
                        <ToggleButton value={4} bsSize="small"><Glyphicon glyph="sort-by-order-alt" /></ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nieuwe Pagina</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Nieuwe pagina</h4>

                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>Titel</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.name}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>Kies een titel voor je pagina met meer dan 4 letters</HelpBlock>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Sluiten</Button>
                        <Button bsStyle="primary" onClick={this.handleNewPage}>Toevoegen</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}

export default ActionButtons;
