import React, { Component } from 'react';
import LayoutComponent from "../components/Layout/Layout";
import navbarItems from '../constants/navbar-items';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { children } = this.props;
        return (<LayoutComponent navbarItems={navbarItems}>
            {children}
        </LayoutComponent>);
    }
}

export default Layout;

