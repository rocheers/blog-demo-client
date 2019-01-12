import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/Homepage';
import AuthForm from '../components/Authform';
import { authUser } from '../store/actions/auth';

const Main = props => {
    const { authUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <HomePage {...props} />} />
                <Route
                    exact
                    path="/signin"
                    render={props => {
                        return <AuthForm onAuth={authUser} buttonText="Log in" heading="Welcome back" {...props} />;
                    }}
                />
                <Route
                    exact
                    path="/signup"
                    render={props => {
                        return (
                            <AuthForm
                                signup={true}
                                onAuth={authUser}
                                buttonText="Sign me up"
                                heading="Join Warbler today"
                                {...props}
                            />
                        );
                    }}
                />
            </Switch>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        { authUser }
    )(Main)
);
