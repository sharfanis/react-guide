import React from "react";
import classes from "../Employee/Employee.css";

// import Radium from 'radium';

const Employee = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Name is: {props.name} and my age is {props.age}
      </p>
      <input
        style={styles.inputStyle}
        type="text"
        onChange={props.changeOnInput}
        value={props.name}
      />
    </div>
  );
};
const styles = {
  inputStyle: {
    width: "60%",
    margin: "16px auto",
    border: "1px solid #eee",
    padding: "16px",
  },
};

export default Employee;
