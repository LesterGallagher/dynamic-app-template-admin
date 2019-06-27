import React, { Component } from 'react';
import styles from './SpecificApp.module.css';
import propTypes from 'prop-types';

class SpecificApp extends Component {
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
        const { renderCMS } = this.props;

        return (
            <div className={styles.SpecificApp}>
                {renderCMS()}
            </div>
        );
    }
}

SpecificApp.propTypes = {
    appKey: propTypes.string.isRequired,
    appPublic: propTypes.any,
    renderCMS: propTypes.func.isRequired
};

export default SpecificApp;
