import React, { useState } from "react";
// function Wall() {
//   const [name, setName] = useState(" David");
//   const handClick = () => {
//     setName(" John");
//   };
//   return (
//     <>
//       <h1>My Name is{name}</h1>;
//       <button onClick={handClick}>Change Name </button>
//     </>
//   );
// }

// function Wall() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   );
// }

function Wall() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevValue) => prevValue + 1); //Using previous value
  };
  const decrement = () => {
    setCount((prevValue) => prevValue - 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Wall;
//Hooks
