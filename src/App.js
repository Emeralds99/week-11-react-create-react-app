import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {

  constructor (props) {
    super (props)
    // this.state.displayTime = ''
    this.state = {
      displayTime: '',
      visitorName: 'Barack Obama'
    }
  }

  componentDidMount () {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  tick () {
    console.log("In tick")
    this.setState({
      displayTime: new Date().toLocaleTimeString()
    })
  }

  render () {
    const displayTime = this.state.displayTime
    const visitorName = this.state.visitorName

    return (
    <div className="clock">    
      <h2>Time is {displayTime}</h2>  
    <h2>Thanks for visiting {visitorName}</h2>
    </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <Clock/>
    </div>
  )
}

export default App;
