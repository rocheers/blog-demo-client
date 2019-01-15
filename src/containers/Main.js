import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/Homepage';
import AuthForm from '../components/Authform';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <HomePage {...props} currentUser={currentUser} />} />
                <Route
                    exact
                    path="/signin"
                    render={props => {
                        return (
                            <AuthForm
                                removeErrors={removeError}
                                errors={errors}
                                onAuth={authUser}
                                buttonText="Log in"
                                heading="Welcome back"
                                {...props}
                            />
                        );
                    }}
                />
                <Route
                    exact
                    path="/signup"
                    render={props => {
                        return (
                            <AuthForm
                                removeErrors={removeError}
                                errors={errors}
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
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        { authUser, removeError }
    )(Main)
);
