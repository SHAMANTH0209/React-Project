import React, { Component, PureComponent } from "react";
class MountUpdateUnmount extends PureComponent {
  //when extends Component is replaced with PureComponent it will render only when there is an update.
  constructor() {
    console.log("in Constructor of MountUpdateUnmount");
    super();
    this.state = {
      name: "David",
    };
  }
  static getDerivedStateFromProps() {
    console.log("in getDerivedState From Props Method in MountUpdateUnmount");
    return null;
  }
  componentDidMount() {
    console.log("in component Did Mount Method in MountUpdateUnmount");
  }
  // shouldComponentUpdate() {
  //   console.log("in should Component Update Method in MountUpdateUnmount");
  //   return true;
  // }
  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate Method in MountUpdateUnmount");
    return null;
  }
  componentDidUpdate() {
    console.log("in component Did Update Method in MountUpdateUnmount");
  }
  componentWillUnmount() {
    console.log("in component Will Unmount Method in MountUpdateUnmount");
  }
  handeClick = () => {
    this.setState({
      name: "John",
    });
  };
  render() {
    console.log("in Render Method in MountUpdateUnmount");
    return (
      <div>
        <h1>Hello Name is {this.state.name} is in MountUpdateUnmount</h1>
        <button onClick={this.handeClick}>Click Here</button>
      </div>
    );
  }
}
export default MountUpdateUnmount;

//PureComponets will render only when there is an update on the State or Page.
//So, shouldComponentUpdate method is not required in PureComponents.Why? Because it is already handled by PureComponents internally.
