import React from "react";
import logo from "./delivery.svg";
function HOCUser(Wrapper) {
  return function NewComponent(props) {
    return (
      <div className="hoc-user">
        <Wrapper {...props} />
        <h1>You are a Premium user</h1>
        <img src={logo} className="App-logo" alt="logo" /> Faster Delivery for
        you is Available.
      </div>
    );
  };
}
export default HOCUser;
