import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    return (
      <div className="App">
        <h1>iRobot</h1>
        <CardList robots={this.state.robots}/>
      </div>
    )
  }
}

export default App;
