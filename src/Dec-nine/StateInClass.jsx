import React, { Component } from "react";
class StateInClass extends Component {
  constructor(props) {
    super();
    this.state = {
      movie: "F1",
    };
  }
  handleClick = () => {
    console.log("Button clicked");
  };
  render() {
    return (
      <div>
        <h1>Watching {this.state.movie}</h1>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}
export default StateInClass;
