import React from "react";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.list);
  console.log("EmployeeList render: ", employees);
  if (employees.length === 0) {
    return <p>No employees added yet.</p>;
  }

  return (
    <div>
      <h2>Employee List (2026)</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {employees.map((employee) => (
          <li
            key={employee.id}
            style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
          >
            <strong>{employee.name}</strong> — {employee.position}
            <br />
            <small>{employee.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
