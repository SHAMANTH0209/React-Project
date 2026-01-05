import React from "react";
import NormalUser from "./NormalUser";
import HOCUser from "./HOCUser";
function PremiumUser() {
  return (
    <>
      <NormalUser />
    </>
  );
}
export default HOCUser(PremiumUser);
