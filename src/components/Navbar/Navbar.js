import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Navbar as BSNavbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navbar extends Component {
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
        const { navbarItems } = this.props;

        return (
            <div className={styles.Navbar}>
                <BSNavbar fluid staticTop inverse className={styles.navbar}>
                    <BSNavbar.Header>
                        <BSNavbar.Brand>
                            ESStudio App Maker <small>(door Sem Postma)</small>
                        </BSNavbar.Brand>
                    </BSNavbar.Header>
                    <Nav>
                        {navbarItems.map(({title, route}, key) => {
                            return (
                                <NavItem componentClass={Link} href={route} to={route} eventKey={key} key={key}>
                                    {title}
                                </NavItem>
                            );
                        })}
                    </Nav>
                </BSNavbar>
            </div>
        );
    }
}

export default Navbar;
