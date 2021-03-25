import React from "react";
import Employee from "./Employee/Employee";

const Employees = (props) =>
  props.persons.map((employee, index) => {
    return (
      <Employee
        click={() => props.deleteEmployee(index)}
        changeOnInput={(event) => props.nameChange(event, employee.id)}
        name={employee.name}
        age={employee.age}
        key={employee.id}
      />
    );
  });
export default Employees;

