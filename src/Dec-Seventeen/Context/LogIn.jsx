import React from "react";
import Landing from "./Landing";
export const UserContext = React.createContext();
function LogIn() {
  const [userName, setUserName] = React.useState(" David Logged In");
  return (
    <div>
      <UserContext.Provider value={userName}>
        <Landing user={userName} />;
      </UserContext.Provider>
    </div>
  );
}
export default LogIn;
