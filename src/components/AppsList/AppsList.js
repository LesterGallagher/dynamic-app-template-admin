import React, { Component } from 'react';
import styles from './AppsList.module.css';

class AppsList extends Component {
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
            <div className={styles.AppsList}>
                AppsList Component
            </div>
        );
    }
}

export default AppsList;
