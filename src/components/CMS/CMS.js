import React, { Component } from 'react';
import styles from './CMS.module.css';
import { Grid, Row, Col, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Link, NavLink, Route, matchPath, withRouter } from 'react-router-dom';
import DetailItem from './DetailItem/DetailItem';
import ActionButtons from './ActionButtons/ActionButtons';
import DetailItemSettings from './DetailItemSettings/DetailItemSettings'
import Draggable from 'react-draggable'; // The default
import CollapsibleList from '../CollapsibleList/CollapsibleList';
import classNames from 'classnames';

const menuItem = title => <div className={styles.menuItem}>{title}</div>;

class CMS extends Component {
    constructor(props) {
        super();
        this.state = {
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    renderMasterItems = () => {
        const { createPagePath, appPages } = this.props;


        return appPages.map((appPagesPage, i) => {
            const { frontmatter: { title } } = appPagesPage;
            const path = createPagePath(appPagesPage);

            const active = !!matchPath(this.props.location.pathname, path);

            return (
                <NavLink className={classNames([styles.menuItem])} key={path} active={active} to={path} href={path}>
                    {title}
                </NavLink>
            );
        });
    }

    renderSettings = () => {
        const { settingsPath } = this.props;
        const active = !!matchPath(this.props.location.pathname, settingsPath);

        return (
            <NavLink className={classNames([styles.menuItem])} key={settingsPath} active={active} to={settingsPath} href={settingsPath} key="settings">
                Instellingen
            </NavLink>
        );
    }

    renderSettingsDetail = () => {
        const { setAppPublic, appPublic } = this.props;
        return (
            <DetailItemSettings appPublic={appPublic} setAppPublic={setAppPublic} />
        );
    }

    renderSettingsDetailRoute = () => {
        const { settingsPath } = this.props;
        return (
            <Route
                path={settingsPath}
                render={this.renderSettingsDetail}
            />
        );
    }

    renderDetailItems = () => {
        const { createPagePath, setPage, appPages, icons } = this.props;

        return appPages.map((page, key) => {
            const path = createPagePath(page);

            const renderDetailItem = () => (
                <DetailItem icons={icons} setPage={setPage} page={page} />
            );

            return (
                <div key={key}>
                    <Route key={key} path={path} render={renderDetailItem}></Route>
                </div>
            );
        });
    }

    render() {
        const { onNewPage, appUrl, devices, overviewUrl, appPublic } = this.props;

        return (
            <div className={styles.CMS}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={4} md={3} lg={2} className={styles.master + ' nopadding'}>
                            <CollapsibleList hideBar>
                                <ActionButtons className={styles.menuItem} onNewPage={onNewPage} />
                                <NavLink className={styles.menuItem} to={overviewUrl}>Overview</NavLink>
                                {this.renderSettings()}
                                <CollapsibleList title={menuItem('Pagina\'s')}>
                                    {this.renderMasterItems()}
                                </CollapsibleList>
                            </CollapsibleList>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={10} className={styles.scrollContainer + ' nopadding'}>
                            <Grid fluid>
                                <Row>
                                    <Col className={styles.leftCol} xs={12} sm={6}>
                                        {this.renderSettingsDetailRoute()}
                                        {this.renderDetailItems()}
                                        <Route exact path={overviewUrl} render={() => {
                                            return (
                                                <div>
                                                    <h1>Overzicht</h1>

                                                    <ul>
                                                        <li>Naam: {appPublic.title}</li>
                                                        <li>Auteur: {appPublic.author}</li>
                                                        <li>Omschrijving: {appPublic.description}</li>
                                                        <li>Taal: {appPublic.language || 'nl'}</li>
                                                    </ul>
                                                </div>
                                            );
                                        }} />
                                    </Col>
                                    <div className="pull-left p10">
                                        <div>
                                            <FormControl componentClass="select" onChange={({ target: { value } }) => this.props.onDeviceChange(devices[+value])}>
                                                {devices.map((device, i) => {
                                                    return (
                                                        <option value={i}>{device.label}</option>
                                                    );
                                                })}
                                            </FormControl>
                                            <br />
                                            <br />
                                        </div>
                                        <div className={'device ' + this.props.deviceClassName}>
                                            <div className="device-frame">
                                                <iframe title="Preview" className="device-content" frameBorder="0" src={appUrl} />
                                            </div>
                                            <div className="device-stripe"></div>
                                            <div className="device-header"></div>
                                            <div className="device-sensors"></div>
                                            <div className="device-btns"></div>
                                            <div className="device-power"></div>
                                        </div>
                                    </div>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

CMS.propTypes = {
    createPagePath: propTypes.func.isRequired,
    setPage: propTypes.func.isRequired,
    appPublic: propTypes.object.isRequired,
    appPages: propTypes.array.isRequired,
    appUrl: propTypes.string.isRequired,
    icons: propTypes.arrayOf(propTypes.string).isRequired,
    onDeviceChange: propTypes.func.isRequired,
    devices: propTypes.object.isRequired,
    deviceClassName: propTypes.string.isRequired
};

export default withRouter(CMS);
