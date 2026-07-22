import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul className="produce-list">
        {this.props.items.map((item) => (
          <li key={item.name}>
            {item.name} - {item.type}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;