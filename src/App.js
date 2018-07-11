import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import posed from 'react-pose'
// import { pose } from 'react-pose'

const config = {
  idle: { x: '0%' },
  hovered: { x: '-100%' }
}

const Square = posed.div(config)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovering: 'idle'
    }
  }
  render() {

    const Title = posed.h1(config)

    return (
      <div className="App">
        <header className="App-header">
          <Square style={{
            borderRadius: 10,
            backgroundColor: 'lightblue',
            height: 50,
            width: 50
          }}
                pose={ this.state.hovering ? 'hovered' : 'idle' }
                onMouseEnter={()=>{ this.setState({ hovering: true }) }}
                onMouseLeave={()=>{ this.setState({ hovering: false }) }}
                />

          {/* <posed.h1 className="App-title">Welcome to React</posed.h1> */}
          <Title
            pose={ this.state.hovering ? 'hovered' : 'idle' }
            onMouseEnter={()=>{ this.setState({ hovering: true }) }}
            onMouseLeave={()=>{ this.setState({ hovering: false }) }}
            className="App-title" style={{ color: 'white' }
          }>
              Welcome to React
          </Title>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
