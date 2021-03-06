import React from "react";
import "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super();
  }

  remove = () => {
    this.props.remove(this.props.todo);
  };

  render() {
    return (
      <div className="Item">
        <p className="todo">
          <strong>TODO:</strong> {this.props.todo}
        </p>
        <button className="todo_button" onClick={this.remove}>
          <strong>X</strong>
        </button>
      </div>
    );
  }
}

export default Item;
