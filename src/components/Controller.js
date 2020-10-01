import React from 'react';
import './Controller.css';

class Controller extends React.Component {
    constructor(props) {
        super();
        this.state = {
            textField: ""
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({
            textField: "test"
        });
        console.log("Test");
    }

    render() {
        return (
            <div className="Controller">
                <input className="input" onChange={this.handleChange}></input>
                <button className="button" onClick={this.props.click}>Add to List</button>
            </div>
        );
    }
}

export default Controller;