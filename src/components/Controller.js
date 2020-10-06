import React from "react";
import "./Controller.css";

class Controller extends React.Component {
  constructor(props) {
    super();
    this.state = {
      textField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ textField: e.target.value });
    this.props.handleChange(e.target.value);
  };

  handleClick = () => {
    this.props.click(this.state.textField);
    this.setState({ textField: "" });
  };

  checkEnter = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className="Controller">
        <input
          className="input"
          value={this.state.textField}
          onChange={this.handleChange}
          onKeyPress={this.checkEnter}
        ></input>
        <button className="button" onClick={this.handleClick}>
          Add to List
        </button>
      </div>
    );
  }
}

export default Controller;
