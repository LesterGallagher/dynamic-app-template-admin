import React, { Component } from 'react';
import SigninComponent from "../components/Login/Login";
import Page from './Page';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';


class Singin extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    onEmailLoginClick = e => {

    }

    onEmailRegisterClick = e => {

    }

    onGoogleLoginClick = async e => {
        try {
            const result = await this.props.firebase.login({
                provider: 'google',
                type: 'redirect'
            })
        } catch(err) {
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
                                        onEmailLoginClick={this.onEmailLoginClick}
                                        onEmailRegisterClick={this.onEmailRegisterClick}
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