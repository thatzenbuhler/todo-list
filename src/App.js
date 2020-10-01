import React from 'react';
import TopBar from './components/TopBar';
import Item from './components/Item';
import Controller from './components/Controller';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      list: [
        { item: "Example todo 1" },
        { item: "Example todo 2" },
        { item: "Example todo 3" }
      ],
      fieldText: ""
    }
  }

  handleClick = () => {
    if (this.state.fieldText.length < 1) {
      alert("Please enter valid text for your Todo item.");
      return;
    }
    this.setState({ list: this.state.list.concat({ item: this.state.fieldText }) });
  }

  handleChange = (value) => {
    this.setState({ fieldText: value });
  }

  removeItem = (item) => {
    this.setState({
      list: this.state.list.filter(each => each.item !== item)
    });
  }

  render() {
    const listItems = this.state.list.map(
      each => <Item key={each.item} todo={each.item} remove={this.removeItem} />
    );
    return (
      <div className="App">
        <TopBar />
        <ul>{listItems}</ul>
        <Controller handleChange={this.handleChange} click={this.handleClick} />
      </div>
    );
  }
}

export default App;
