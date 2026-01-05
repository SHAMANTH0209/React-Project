import React, { Component } from "react";
class Mounting extends Component {
  constructor() {
    console.log("in Constructor");
    super();
    this.state = {
      name: "David",
    };
  }
  static getDerivedStateFromProps() {
    console.log("in getDerivedState From Props Method");
  }
  componentDidMount() {
    console.log("in component Did Mount Method");
  }
  render() {
    console.log("in Render Method");
    return (
      <div>
        <h1>Hello Name is {this.state.name}</h1>
      </div>
    );
  }
}
export default Mounting;
//React life Cycle is of three types
//1.1.mounting
//Methods in order
//1. constructor
//2. getDerivedStateFromProps
//3. render
//4. componentDidMount
//2.1update
//1. getDerivedStateFromProps
//2. shouldComponentUpdate
//3. render
//4. getSnapshotBeforeUpdate
//5. componentDidUpdate
//3.1unmounting
//1. componentWillUnmount
//Note: In mounting phase only constructor, getDerivedStateFromProps, render, componentDidMount methods are called.
