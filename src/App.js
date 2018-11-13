import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/LoginPage';

class App extends Component {
  state = {
    seconds:0
  }
  tick = () => {
    this.setState({
      seconds:this.state.seconds+1,
    })
  }
  // componentDidMount = () => {
  //   setInterval(()=>this.tick(),1000);
  // }
  render() {
    return (
      <div className="App">
        <span>Welcome {this.props.name}</span>
        {/* <div>second : {this.state.seconds}</div> */}
      </div>
    );
  }
}

export default App;
