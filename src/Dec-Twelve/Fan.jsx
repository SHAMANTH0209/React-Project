import React, { Component } from "react";

class Fan extends Component {
  constructor() {
    super();
    this.state = {
      user: "David",
    };
  }
  //   handleChange = () => {
  //     console.log("changed " + event.target.value);
  //   };

  handleChange = () => {
    this.setState({
      user: event.target.value,
    });
  };

  render() {
    return (
      <>
        <label htmlFor="un">UserName</label>
        <input
          type="text"
          id="un"
          //   value={this.state.name}
          value={this.state.user}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default Fan;
