import React from "react";
import TopBar from "./components/TopBar";
import Item from "./components/Item";
import Controller from "./components/Controller";
import store from "store";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      list: store.get("todos") || [{ item: "Example todo 1" }],
      fieldText: "",
    };
  }

  handleClick = () => {
    if (this.state.fieldText.length < 1) {
      alert("Please enter valid text for your Todo item.");
      return;
    }
    this.setState({
      list: this.state.list.concat({ item: this.state.fieldText }),
    });
  };

  handleChange = (value) => {
    this.setState({ fieldText: value });
  };

  removeItem = (todo) => {
    this.setState({
      list: this.state.list.filter((each) => each.item !== todo),
    });
  };

  componentDidUpdate() {
    store.set("todos", this.state.list);
  }

  render() {
    const listItems = this.state.list.map((each, index) => (
      <Item key={index} todo={each.item} remove={this.removeItem} />
    ));
    return (
      <div className="App">
        <TopBar />
        <ul style={{ padding: "0" }}>{listItems}</ul>
        <Controller handleChange={this.handleChange} click={this.handleClick} />
      </div>
    );
  }
}

export default App;
