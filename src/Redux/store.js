import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import employeeReducer from "./slice/employeeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    employees: employeeReducer, // ✅ MATCHES SELECTOR
  },
});

export default store;
