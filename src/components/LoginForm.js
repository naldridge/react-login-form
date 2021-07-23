import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            serverResponse: null,
            //prior to response, use a falsey value
        }
    }

    _submitForm = (e) => {
        e.preventDefault();
        const serverResponse = this.props.handleSubmit(this.state.username, this.state.password);
        this.setState({
            serverResponse
        }, () => {
            console.log(serverResponse);
        });
    }


    _updateField = (field, val) => {
        this.setState({
            [field]: val,
            serverResponse: null
        }, () => {
            console.log(`${field} is now ${val}`);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={(e) => {
                            this._updateField('username', e.target.value)
                        }} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={(e) => {
                            this._updateField('password', e.target.value)
                        }} />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
                <LoginMessage {...this.state.serverResponse} />
            </div>
        );
    }
}
class LoginMessage extends Component {
    //No need for a constructor, doesn't manage any state

    render() {
        const { message, isValid } = this.props;

        if (message) {
            return (
                <h1 className={isValid ? 'success' : 'error'}>
                    {message}
                </h1>
            );
        } else {
            return null;
        }
    }
}

export default LoginForm;