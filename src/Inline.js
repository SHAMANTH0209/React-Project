//ways to use inline style in javascript react
import React from "react";
const Inline = () => {
  const divStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  };
  const headingStyle = {
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };
  const paragraphStyle = {
    color: "#666",
    fontSize: "16px",
  };
  return (
    <div style={divStyle}>
      <h2 style={headingStyle}>Inline Styling in React</h2>
      <p style={paragraphStyle}>
        This component demonstrates how to use inline styles in React using
        JavaScript objects.
      </p>
    </div>
  );
};
export default Inline;
