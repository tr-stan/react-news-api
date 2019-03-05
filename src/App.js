import React, { Component } from 'react';
import Login from './Login/Login';
import News from './News/News';
import './App.css';
import { Container } from 'semantic-ui-react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            logged: false,
            username: '',
        }
    }

    login = (username) => {
        this.setState({
            logged: true,
            username: username
        })
    }



    render() {
        return (
            <div>
            <h1>JavaScript News</h1>
              {this.state.logged ? <News username={this.state.username}/> : <Login login={this.login}/>}
            </div>
        );
    }
}

export default App;