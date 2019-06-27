import React, { Component } from 'react';
import styles from './Login.module.css';
import { FacebookLoginButton, GoogleLoginButton, createButton } from "react-social-login-buttons";
import propTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Modal, Overlay, OverlayTrigger, Button, Popover, Tooltip } from 'react-bootstrap';

const EmailLoginButton = createButton({
    text: 'Login with Email and Password',
    icon: 'mail',
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
});

const EmailRegisterButton = createButton({
    text: 'Register with Email and Password',
    icon: 'mail',
    style: { background: "#305090" },
    activeStyle: { background: "#293e69" }
});

class Login extends Component {

    email = '';
    password = '';
    username = '';

    constructor(props) {
        super();
        this.state = {
            registerModalOpen: false
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    openRegisterModal = () => {
        this.setState({ registerModalOpen: true });
    }

    closeRegisterModal = () => {
        this.setState({ registerModalOpen: false });
    }

    handleRegister = e => {
        const { email, password } = this;
        this.props.onEmailRegister({ email, password });
        this.closeRegisterModal();
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                Kies een sterk wachtwoord.
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">Kies je Gebruikersnaam.</Tooltip>;

        return (
            <div className={styles.Login}>

                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl defaultValue={this.email} onChange={e => this.email = e.target.value} type="text" />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Wachtwoord</ControlLabel>
                    <FormControl defaultValue={this.password} onChange={e => this.password = e.target.value} type="password" />
                </FormGroup>

                <EmailLoginButton onClick={() => this.props.onEmailLogin({ email: this.email, password: this.password} )} />

                <EmailRegisterButton onClick={this.openRegisterModal} />

                <Modal show={this.state.registerModalOpen} onHide={this.handleRegister}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registreren</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl defaultValue={this.email} onChange={e => this.email = e.target.value} type="text" />
                        </FormGroup>
                        <OverlayTrigger overlay={tooltip}>
                            <FormGroup>
                                <ControlLabel>Gebruikersnaam</ControlLabel>
                                <FormControl defaultValue={this.username} onChange={e => this.username = e.target.value} type="text" />
                            </FormGroup>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={popover}>
                            <FormGroup>
                                <ControlLabel>Wachtwoord</ControlLabel>
                                <FormControl defaultValue={this.password} onChange={e => this.password = e.target.value} type="password" />
                            </FormGroup>
                        </OverlayTrigger>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.handleRegister}>Registreren</Button>
                        <Button bsStyle="danger" onClick={this.closeRegisterModal}>Sluiten</Button>
                    </Modal.Footer>
                </Modal>

                <hr />

                <GoogleLoginButton onClick={this.props.onGoogleLoginClick} />
            </div>
        );
    }
}

Login.propTypes = {
    onEmailLogin: propTypes.func.isRequired,
    onEmailRegister: propTypes.func.isRequired,
    onGoogleLoginClick: propTypes.func.isRequired,
}

export default Login;
