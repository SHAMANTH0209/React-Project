import React, { Component } from "react";
import "./ClassComponent.css";

class ClassComponent extends Component {
  render() {
    const { name, number, mobile = [] } = this.props;

    let data = mobile.map((value, index) => (
      <div className="main" key={index}>
        <div className="section-one">
          <img src={value.url} alt="mobile" />
        </div>

        <div className="section-two">
          <h1>{value.name}</h1>
          <p>{value.about}</p>

          <div className="payment">
            <button className="buy">Add to Cart</button>
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div>
    ));

    return <div className="mobile">{data}</div>;
  }
}

export default ClassComponent;
