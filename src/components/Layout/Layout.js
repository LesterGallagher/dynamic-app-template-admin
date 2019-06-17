import React, { Component } from 'react';
import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import propTypes from 'prop-types';

class Layout extends Component {
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
        const { navbarItems, children } = this.props;

        return (
            <div className={styles.Layout}>
                <Navbar navbarItems={navbarItems} />
                <div>
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

Layout.propTypes = {
    navbarItems: propTypes.arrayOf(propTypes.object).isRequired,
}

Layout.defaultProps = {
    navbarItems: []
}

export default Layout;
