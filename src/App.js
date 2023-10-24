import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Login from './components/Login';
import DateWrapper from './components/DateWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLogged: false,
    };
  }

  updateUsername = (username) => {
    this.setState({ username, isLogged: true });
  };

  logout = () => {
    this.setState({ isLogged: false, username: '' });
  };

  render() {
    return (
      <div>
        {this.state.isLogged ? (
          <div>
            <Greeting name={this.state.username} />
            <DateWrapper />
            <button onClick={this.logout}>Вийти</button>
          </div>
        ) : (
          <Login updateUsername={this.updateUsername} />
        )}
      </div>
    );
  }
}

export default App;
