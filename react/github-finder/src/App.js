import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import UserList from './components/UserList/UserList';
import Search from './components/Search/Search';
import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  searchUsers = (keyword) => {
    // Arama başlarken loading true
    this.setState({ loading: true });
    
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => this.setState({ users: data.items, loading: false }))
        .catch(error => {
          console.error("Hata:", error);
          this.setState({ loading: false });
        });
    }, 1000);
  };

  clearResults = () => {
    this.setState({ users: [] });
  }

  render() {
    return (
      <>
        <Navbar />
        <Search 
          searchusers={this.searchUsers} 
          clearResults={ this.clearResults } 
          showClearButton={ this.state.users.length > 0 ? true : false}  
        />
        <UserList users={this.state.users} loading={this.state.loading} />
      </>
    );
  }
}

export default App;
