import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <p>Search for users or repositories</p>
            <Input fluid action={{ icon: 'search' }} placeholder='Search...' />
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
        </Layout>
    );
};

export default Home;