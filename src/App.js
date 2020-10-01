import React from 'react';
import TopBar from './components/TopBar';
import Item from './components/Item';
import Controller from './components/Controller';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      list: [
        { item: "Example todo 1" },
        { item: "Example todo 2" },
        { item: "Example todo 3" }
      ]
    }
  }

  handleClick = () => {
    alert("Test");
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        {this.state.list.map(each => <Item todo={each.item} />)}
        <Controller click={this.handleClick}/>
      </div>
    );
  }
}

export default App;
