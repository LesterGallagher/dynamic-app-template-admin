import React, { Component } from 'react';
import styles from './CollapsibleList.module.css';
import classNames from 'classnames';
import propTypes from 'prop-types';

class CollapsibleList extends Component {
    constructor(props) {
        super(props);
        const { initiallyOpen: open } = this.props;

        this.state = {
            open
        }
    }

    render() {
        const { children, title, hideBar } = this.props;
        const { open } = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={classNames({ [styles.hideBar]: hideBar || !open, [styles.primaryBar]: true, 'bg-success': true })}></div>
                <div role="button" className={styles.title} onClick={() => this.setState({ open: !open })}>
                    {title}
                </div>
                <ul className={classNames({ [styles.open]: open, [styles.CollapsibleList]: true })}>
                    {(children || []).map((child, i) => {
                        return (
                            <li key={i} className={styles.listItem}>
                                {child}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

CollapsibleList.defaultProps = {
    initiallyOpen: true,
    hideBar: false
}

CollapsibleList.propTypes = {
    initiallyOpen: propTypes.bool,
    hideBar: propTypes.bool
}

export default CollapsibleList;


