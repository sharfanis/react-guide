import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  //   useEffect(() => {
  //     console.log("[Cockpit.js useEffect");

  //     setTimeout(() =>{
  //         alert('Saved Data');
  //     }, 1000);
  //   }, [props.persons]);

  // To run only one time , set UseEffect and pass and empty array.

  useEffect(() => {
    setTimeout(() => {
     // alert(" Only one time");
      console.log("[Cockpit.js] Coming from USE Effect");
    }, 1000);

    // This is the clean up work. This is before the useEffect runs and AFTER the render cycle.
    return () => {
      console.log("[Cockpit.js] Clean UP WORK");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js 2 useEffect");
    return () => {
      console.log("[Cockpit.js] 2 Clean UP WORK for Second USE EFFECT");
    };
  });

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

export default React.memo(Cockpit);
