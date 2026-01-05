//Program to create ATM component in react
import React, { useState } from "react";
function Atm() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    setBalance(balance + Number(amount));
  };

  const handleWithdraw = () => {
    setBalance(balance - Number(amount));
  };

  return (
    <>
      <h1>ATM</h1>
      <p>Balance: {balance}</p>
      <input
        type="number"
        value={amount}
        onChange={() => setAmount(event.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </>
  );
}
export default Atm;
