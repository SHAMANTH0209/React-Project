import React, { Component } from "react";
class Better extends Component {
  constructor() {
    super();
    this.state = {
      movie: "F1",
    };
    // this.handleClick2 = this.handleClick2.bind(this); //2nd way to bind a function
  }
  //   handleClick() {
  //     console.log("this Keyword", this);
  //     this.setState({
  //       movie: "Batman Returns",
  //     });
  //   }
  handleClick = () => {
    //3rd way to bind a function using arrow function
    console.log("this Keyword", this);
    this.setState({
      movie: "Batman Returns",
    });
  };

  render() {
    return (
      <div>
        <h1>Watching {this.state.movie} Movie</h1>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
      //   <div>
      //     <h1>Watching {this.state.movie} Movie</h1>
      //     <button onClick={this.handleClick.bind(this)}>Click Here</button>
      //   </div> // Binding "this" keyword 1st way
    );
  }
}
export default Better;
