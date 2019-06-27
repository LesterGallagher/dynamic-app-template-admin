import React, { Component } from 'react';
import SigninComponent from "../components/Login/Login";
import Page from './Page';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Singin extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    onEmailLogin = async ({ email, password }) => {
        try {
            const result = await this.props.firebase.login({
                signIn: false,
                email,
                password
            });

            toast('Succesvol ingelogd!');
        } catch (err) {
            alert(err);
        }
    }

    onEmailRegister = async ({ email, password }) => {
        console.log('ON REGISTER')
        try {
            const result = await this.props.firebase.createUser({ email, password })

            toast('Succesvol geregistreerd!');
        } catch (err) {
            alert(err);
        }
    }

    onGoogleLoginClick = async e => {
        try {
            const result = await this.props.firebase.login({
                provider: 'google',
                type: 'redirect'
            });

            toast('Succesvol ingelogd!');
        } catch (err) {
            alert(err);
        }
    }

    render() {

        return (
            <Page>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={6} mdOffset={3}>
                            <Panel>
                                <Panel.Heading>Login</Panel.Heading>
                                <Panel.Body>
                                    <SigninComponent
                                        onEmailLogin={this.onEmailLogin}
                                        onEmailRegister={this.onEmailRegister}
                                        onGoogleLoginClick={this.onGoogleLoginClick}
                                    />
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>

            </Page>
        );
    }
}



const enhance = compose(
    firebaseConnect(),
    connect(
        // Map redux state to component props
        ({ firebase: { auth, profile } }) => ({
            profile: {
                auth,
                profile,
            },
        })
    )
)


export default enhance(Singin);