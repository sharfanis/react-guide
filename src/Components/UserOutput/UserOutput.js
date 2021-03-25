import React from "react";
import '../Employees/Employee/Employee.css';


const UserOutput = (props) => {
  return (
    <div className="Person">
      <p>{props.name}</p>
    </div>
  );
};

export default UserOutput;
