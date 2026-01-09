//Simple example to print name list from dummy data using redux toolkit and print the values in DummyList component
import React from "react";
import { useSelector } from "react-redux";
const DummyList = () => {
  const dummyData = useSelector((state) => state.employees.list);
  return (
    <div>
      <h2>Dummy Data List</h2>
      <ul>
        {dummyData.map((employee) => (
          <li key={item.id}>{map.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyList;
