import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // Arrow function automatically binds "this"
  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increase}>{this.state.count} Button</button>
      </div>
    );
  }
}

export default Counter;
