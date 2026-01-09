import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Redux/slice/employeeSlice";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addEmployee({
        id: Date.now(),
        ...formData,
      })
    );

    setFormData({ name: "", email: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <br />

      <input
        type="text"
        placeholder="Position"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        required
      />
      <br />

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
