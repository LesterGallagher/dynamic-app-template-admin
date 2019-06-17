import React, { Component } from 'react';
import styles from './DetailItem.module.css';
import propTypes from 'prop-types';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Button, Grid, Col, Row } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToMarkdown from 'draftjs-to-markdown';
import { get } from 'lodash';
import Autocomplete from 'react-autocomplete';
import 'onsenui/css/material-design-iconic-font/css/material-design-iconic-font.css';

const defaultAutoCompleteConfig = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%',
    zIndex: 2000,
}


class DetailItem extends Component {
    constructor(props) {
        super(props);


        console.log(props.page);

        const { page, page: { rawDraftJSContentState, frontmatter: { title } }, icons } = this.props;

        console.log(rawDraftJSContentState);

        this.contentState = !!rawDraftJSContentState
            ? convertFromRaw(rawDraftJSContentState)
            : ContentState.createFromText(`Mijn nieuwe "${title}" pagina`);

        this.editorState = EditorState.createWithContent(this.contentState);

        this.icons = icons;

        this.page = page;

        this.state = {
            icon: (page.frontmatter.icon || '').replace('md md-', '')
        };
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    onEditorStateChange = (editorState) => {
        console.log(editorState);
        this.editorState = editorState;
    };

    save = () => {
        console.log(this);
        const { editorState, page: { id }, page } = this;
        const { setPage } = this.props;
        const { icon } = this.state;
        const frontmatter = Object.assign({}, page.frontmatter);

        const rawDraftJSContentState = convertToRaw(
            editorState.getCurrentContent()
        );
        const hashConfig = {
            trigger: '#',
            // separator: ' ',
        };
        const customEntityTransform = undefined;
        const config = {
            blockTypesMapping: {/* mappings */ },
            emptyLineBeforeBlock: true
        };
        const markdown = draftToMarkdown(rawDraftJSContentState, hashConfig, customEntityTransform, config);
        console.log(rawDraftJSContentState);

        Object.assign(frontmatter, { icon });
        Object.assign(page, { rawDraftJSContentState, markdown });
        Object.assign(page, { frontmatter });
        this.setState({ page });

        console.log(page);
        setPage(id, page);
    }

    render() {
        const { page: { frontmatter: { title } }, appUrl } = this.props;


        return (
            <div className={styles.DetailItem} style={{ marginTop: "60px" }}>
                <h2>{title}</h2>

                <div className={styles.autocomplete}>
                    <Autocomplete
                        menuStyle={defaultAutoCompleteConfig}
                        getItemValue={item => item}
                        items={this.icons}
                        renderItem={(item, isHighlighted) =>
                            <div key={item} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                <span className={`zmdi ${item.replace('md', 'zmdi')}`}> {item.replace('md-', '')}</span>
                            </div>
                        }
                        shouldItemRender={item => this.state.icon.length > 2 && item.includes(this.state.icon)}
                        value={this.state.icon}
                        onChange={(e) => this.setState({ icon: e.target.value })}
                        onSelect={icon => this.setState({ icon })}
                    />
                </div>


                <Grid fluid>
                    <Row>
                        <Col>
                            <Editor
                                defaultEditorState={this.editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </Col>
                    </Row>
                </Grid>

                <Button onClick={this.save}>Opslaan</Button>
            </div>
        );
    }
}

DetailItem.propTypes = {
    page: propTypes.object.isRequired,
    setPage: propTypes.func.isRequired,
    icons: propTypes.arrayOf(propTypes.string).isRequired,
};

export default DetailItem;
