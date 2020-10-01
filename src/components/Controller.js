import React from 'react';
import './Controller.css';

class Controller extends React.Component {
    constructor(props) {
        super();
        this.state = {
            textField: ""
        };
    };

    handleChange = (e) => {
        this.props.handleChange(e.target.value);
    }

    handleClick = () => {
        this.props.click(this.state.textField);
    }

    render() {
        return (
            <div className="Controller">
                <input className="input" onChange={this.handleChange}></input>
                <button className="button" onClick={this.handleClick}>Add to List</button>
            </div>
        );
    }
}

export default Controller;