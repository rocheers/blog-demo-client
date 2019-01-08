import React, { Component } from 'react';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signup ? 'signup' : 'signin';
        this.props
            .onAuth(authType, this.state)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(() => {
                return;
            });
    };

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signup, errors, history, removeErrors } = this.props;
        history.listen(() => {
            removeErrors();
        });
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            {signup && [
                                <label htmlFor="username">Username:</label>,
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                />,
                                <label htmlFor="image-url">Image URL:</label>,
                                <input
                                    type="text"
                                    className="form-control"
                                    id="image-url"
                                    name="profileImageUrl"
                                    value={profileImageUrl}
                                    onChange={this.handleChange}
                                />
                            ]}
                            <button className="btn btn-primary btn-block btn-lg" type="submit">
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
