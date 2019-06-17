import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Page from './containers/Page';
import Routes from './containers/Routes';
import { compose } from 'C:/Users/HP/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { firebaseConnect } from 'react-redux-firebase';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userHasAuthenticated: true
    }
  }
  render() {
    const childProps = {
      isAuthenticated: !this.props.auth.isEmpty,
      userHasAuthenticated: this.props.auth.isLoaded
    };
    return (
      <div className="App">
        <Routes childProps={childProps} />
        <ToastContainer />
      </div>
    );
  }
}

const enhance = compose(
  firebaseConnect(),
  connect(
    // Map redux state to component props
    ({ firebase: { auth, profile } }) => ({
      auth,
      profile,
    })
  )
)

export default enhance(App);
