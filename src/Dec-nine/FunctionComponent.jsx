// Fuctional component for button clivk event
import React from "react";

function FunctionComponent() {
  const handleClick = () => {
    console.log("Function Component Button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Function Component Button</button>
    </div>
  );
}

export default FunctionComponent;
