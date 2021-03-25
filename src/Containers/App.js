import React, { Component, useState } from "react";
import classes from "./App.css";
// import UserInput from "../Components/UserInput/UserInput";
// import UserOutput from "../Components/UserOutput/UserOutput";
// import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";
import Employees from "./../Components/Employees/Employees";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  render() {
    const [employeeVisibility, setEmployeeVisibility] = useState(false);

    const [person, setPersonState] = useState({
      persons: [
        {
          id: 1,
          name: "Shabih",
          age: 32,
        },
        {
          id: 2,
          name: "oshu",
          age: 27,
        },
        {
          id: 3,
          name: "Hitt",
          age: 21,
        },
      ],
      otherState: "Random text",
    });

    let employee = null;

    const deleteEmployeeHandler = (index) => {
      console.log(index);
      // Make a copy
      const temp = [...person.persons];
      temp.splice(index, 1);

      // That's how you update the values. Very Important Concept.
      //Never update the orignal array , always make a copy and then mutate the array !!
      setPersonState((prevState) => ({ ...prevState, persons: temp }));
    };

    const nameChangeHandler = (event, id) => {
      // Copy of original array.
      const duplicateEmployees = [...person.persons];
      // Find Index
      const indexVal = person.persons.findIndex((x) => x.id === id);
      duplicateEmployees[indexVal].name = event.target.value;
      setPersonState((prevState) => ({
        ...prevState,
        persons: duplicateEmployees,
      }));
    };

    const toggleChangehandler = () => {
      setEmployeeVisibility(!employeeVisibility);
    };

    // For visibility if the employee visibility is true then ,
    if (employeeVisibility) {
      employee = (
        <Employees
          persons={person.persons}
          deleteEmployee={deleteEmployeeHandler}
          nameChange={nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={props.title}
          toggleChange={toggleChangehandler}
          employeeVisibilityFlag={employeeVisibility}
        />
        {employeeVisibility ? employee : null}
      </div>
    );
  }
}
export default App;
