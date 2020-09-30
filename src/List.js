import React from 'react';
import Item from './Item';
import './List.css';

class List extends React.Component {
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

    render() {
        return (
            <div>
                {this.state.list.map(each => <Item todo={each.item} />)}
            </div>
        )
    }
}

export default List;