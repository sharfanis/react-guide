import React, { PureComponent } from "react";
import Employee from "./Employee/Employee";

class Employees extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Employee.JS] getDerivedStateFromProps");
    return state;
  }

  // This needs to basically check all props .
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[EmployeeS.JS] shouldComponentUpdate");
  //   if(nextProps.persons !== this.props.persons) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[EmployeeS.JS] getSnapshotBeforeUpdate");
    return { message: "This is Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[EmployeeS.JS] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[EmployeeS.JS] ComponentWillUnmounT");
  }

  render() {
    console.log("[Employeess.js rendering");
    return this.props.persons.map((employee, index) => {
      return (
        <Employee
          click={() => this.props.deleteEmployee(index)}
          changeOnInput={(event) => this.props.nameChange(event, employee.id)}
          name={employee.name}
          age={employee.age}
          key={employee.id}
        />
      );
    });
  }
}
export default Employees;
