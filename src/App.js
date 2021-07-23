import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          credentials: {
              huxley: {
                  password: 's3kr3t',
              }
          }
      }
  }

  _checkCredentials = (username, password) => {
      console.log('checking credentials');
      const userObj = this.state.credentials[username];
      if (userObj && (userObj.password === password)) {
          //If we found a user in this.state.credentials
          //and the passwords match.
          return {
              isValid: true,
              message: 'Login successful'
          };
      } else {
          //We couldn't find a user with that username
          //or the passwords didn't match
          return {
              isValid: false,
              message: 'Bad username or password'
          };
      }
  }

  render() {
      return (
          <div className="App">
            <LoginForm handleSubmit={this._checkCredentials}/>
          </div>
      );
  }
}

export default App;