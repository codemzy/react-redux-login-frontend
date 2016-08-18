
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// components
import App from '../components/App';
import Resources from '../components/Resources';

export default (
    <Route path='/' component={App}>
        <Route path="/resources" component={Resources} />
    </Route>
);