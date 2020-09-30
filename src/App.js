import React from 'react';
import TopBar from './TopBar';
import List from './List';
import Controller from './Controller';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <List/>
        <Controller/>
      </div>
    );
  }
}

export default App;
