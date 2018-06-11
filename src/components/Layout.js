import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
    return (
        <Container>
            <Link to="/">
                <Header as="h1" className={h1}>
                    Github Search
                </Header>
            </Link>
            {children}
            <Divider />
        </Container>
    );
};

export default Layout;