import './App.css';
import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button texto="Botão 1" />
        <Button texto="Botão 2" />
        <Button texto="Botão 3" />
      </div>
    );
  }
}

export default App;
