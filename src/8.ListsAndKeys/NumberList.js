import React, { Component } from "react";

function ListItem(props) {
  return <li>{props.value}</li>;
}
export default class NumberList extends Component {
  numbers = this.props.numbers;
  render() {
    return (
      <ul>
        {this.numbers.map(number => {
          return <ListItem value={number} key={number.toString()} />;
        })}
      </ul>
    );
  }
}
