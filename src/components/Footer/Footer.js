import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
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
            <div className={styles.Footer}>
                Footer Component
            </div>
        );
    }
}

export default Footer;
