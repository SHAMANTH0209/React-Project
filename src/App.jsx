import React from "react";
// import Routing from "./Dec-Sixteen/Routing/Routing";
// import Mounting from "./Dec-Sixteen/LifeCycle/Mounting";
// import MountUpdateUnmount from "./Dec-Sixteen/LifeCycle/MountUpdateUnmount";
// import Logout from "./Dec-Seventeen/Context/Logout";
// import Shopping from "./Dec-Seventeen/Context/Shopping";
// import LogIn from "./Dec-Seventeen/Context/Login";
// import Job from "./Dec-Eighteen/Condition/Job";
// import NoJob from "./Dec-Eighteen/Condition/NoJob";
// import NormalComponent from "./Dec-Eighteen/HOC/NormalComponent";
// import UpdatedComponent from "./Dec-Eighteen/HOC/UpdatedComponent";
// import HOCComponent from "./Dec-Eighteen/HOC/HOCComponent";
// import NormalUser from "./Dec-Eighteen/HOC/NormalUser";
// import PremiumUser from "./Dec-Eighteen/HOC/PremiumUser";
// import "./App.css";
// import Basics from "./Dec-nineteen/useEffect/Basics";
// import OnlyOnce from "./Dec-nineteen/useEffect/OnlyOnce";
// import Dependency from "./Dec-nineteen/useEffect/Dependency";
// import GetApiData from "./Dec-nineteen/API/GetApiData";
// import Routing from "./Dec-Sixteen/Routing/Routing";
import CounterRedux from "./Redux/CounterRedux";
import EmployeeForm from "./Redux/employeeForm";
import EmployeeList from "./Redux/EmployeeList";
import DummyList from "./Redux/DummyList";
import Inline from "./Inline";
// import ClassComponent from "./dec-eight/ClassComponent";
// import StateInClass from "../Dec-nine/StateInClass";
// import FunctionComponent from "../Dec-nine/FunctionComponent";
// import Better from "../Dec-ten/Better";
// import Counter from "../Dec-ten/Counter";
// import LearnFragment from "../Dec-Eleven/LearnFragment";
// import Parent from "../Dec-Eleven/Parent";
// import Fan from "../Dec-Twelve/Fan";
// import Wall from "../Dec-Twelve/Wall";
// import Atm from "../Dec-Twelve/Atm";
// import One from "../Dec-Sixteen/Routing/One";
// import Two from "../Dec-Sixteen/Routing/Two";

function App() {
  // const Good = true;
  // const value = Good ? <Job /> : <NoJob />; 1st method
  const Good = false;
  const value = Good; //second method
  // const name = "David";
  // const number = "12345678";

  // const mobile = [
  //   {
  //     name: "iPhone 17 , 256 GB",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XvjZHv5TO27WPBqDrPSZSPQUfN0RfR0oQQ&s",
  //     about:
  //       "Experience lightning-fast performance, stunning display, and unmatched camera quality.",
  //   },
  // ];

  return (
    <div>
      {/* <ClassComponent name={name} number={number} mobile={mobile} /> */}
      {/* <StateInClass />
      <FunctionComponent /> */}
      {/* <Better /> */}
      {/* <Counter /> */}
      {/* <LearnFragment /> */}
      {/* <Parent /> */}
      {/* <Fan s /> */}
      {/* <Wall /> */}
      {/* <Atm />; */}
      {/* <Routing />
      <Mounting />
      <MountUpdateUnmount /> */}
      {/* <LogIn /> */}
      {/* {Good && <Job />}
      {!Good && <NoJob />}
      {value} */}
      {/* <NormalComponent name="Normal" />
      <UpdatedComponent name="Updated" />
      <HOCComponent /> */}
      {/* <NormalUser />
      <PremiumUser /> */}
      {/* <Basics />
      <OnlyOnce />
      <Dependency /> */}
      {/* <Routing /> */}
      {/* <GetApiData /> */}
      {/* <Dec-Twenty /> */}
      {/* <CounterRedux /> */}
      {/* <EmployeeForm />
      <EmployeeList />
      <DummyList /> */}
      <Inline />
    </div>
  );
}

export default App;
