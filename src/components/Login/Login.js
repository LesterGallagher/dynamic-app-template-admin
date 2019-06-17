import React, { Component } from 'react';
import styles from './Login.module.css';
import { FacebookLoginButton, GoogleLoginButton, createButton } from "react-social-login-buttons";
import propTypes from 'prop-types';

const EmailLoginButton = createButton({
    text: 'Login with Email and Password',
    icon: 'mail',
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
});

const EmailRegisterButton = createButton({
    text: 'Register with Email and Password',
    icon: 'mail',
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
});

class Login extends Component {
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
            <div className={styles.Login}>
                <EmailLoginButton onClick={this.props.onEmailLoginClick} />
                <EmailRegisterButton onClick={this.props.onEmailRegisterClick} />

                <hr />

                <GoogleLoginButton onClick={this.props.onGoogleLoginClick} />
            </div>
        );
    }
}

Login.propTypes = {
    onEmailLoginClick: propTypes.func.isRequired,
    onEmailRegisterClick: propTypes.func.isRequired,
    onGoogleLoginClick: propTypes.func.isRequired,
}

export default Login;
