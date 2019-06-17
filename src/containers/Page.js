import React, { Component } from 'react';
import PageComponent from "../components/Page/Page";
import Layout from './Layout';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout>
                <PageComponent>
                    {this.props.children}
                </PageComponent>
            </Layout>
         );
    }
}
 
export default Page;

