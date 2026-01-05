import React, { useContext } from "react";
import { UserContext } from "./Login";
function Logout(props) {
  const userName = useContext(UserContext);
  return (
    <div>
      <h1>Hello User{userName}</h1>
    </div>
  );
}
export default Logout;
