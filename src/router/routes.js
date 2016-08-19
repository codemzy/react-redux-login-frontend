
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// higher order component
import requireAuth from '../components/Require_Auth'

// components
import App from '../components/App';
import Resources from '../components/Resources';

export default (
    <Route path='/' component={App}>
        <Route path="/resources" component={requireAuth(Resources)} />
    </Route>
);