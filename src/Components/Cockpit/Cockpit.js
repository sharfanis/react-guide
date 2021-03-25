import React from "react";
import classes from "./Cockpit.css";

const Cockpit = ( props ) => {
  let btnClass = [classes.Button];
  // For visibility if the employee visibility is true then ,
  if (props.employeeVisibilityFlag) {
    btnClass.push(classes.Red);
  }

  return (
    <div>
      <h1> {props.title} </h1>
      <button className={btnClass.join(" ")} onClick={props.toggleChange}>
        Toggle Employees Data
      </button>
    </div>
  );
};

export default Cockpit;
