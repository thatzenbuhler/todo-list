import React from 'react';
import './Item.css';

class Item extends React.Component {
    render() {
        return (
            <div className="Item">
                <p>
                    TODO: {this.props.todo}
                </p>
            </div>
        );
    }
}

export default Item;