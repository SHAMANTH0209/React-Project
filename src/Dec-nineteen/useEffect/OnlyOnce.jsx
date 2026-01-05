import { useState, useEffect } from "react";

function OnlyOnce() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <h1>I've Rendered {count} Times!</h1>;
}

export default OnlyOnce;
