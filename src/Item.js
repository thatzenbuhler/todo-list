import React from 'react';
import './Item.css';

class Item extends React.Component {
    render() {
        return (
            <div className="Item">
                <p>
                    Here is some example text to represent a Todo item.
                </p>
            </div>
        );
    }
}

export default Item;