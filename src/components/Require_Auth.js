import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        constructor(props, context) {
            super(props);
            context.router;
        }
        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    
    Authentication.contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    
    return connect((state) => {
    return {
        authenticated: state.authenticated
    };
})(Authentication);
}