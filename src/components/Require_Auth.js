import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    
    return connect((state) => {
    return {
        authenticated: state.authenticated
    };
})(Authentication);
}