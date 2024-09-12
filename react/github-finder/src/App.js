import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import UserList from './components/UserList/UserList';
import './App.css';


export class App extends Component {

  constructor(props) {
      super(props)
    
      this.state = {
        users: []
      }
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => this.setState({users: data}))
  }
  render() {

    return (
      <>
      <Navbar />
      <UserList users={ this.state.users }/>
    </>
    )
  }
}

export default App;
