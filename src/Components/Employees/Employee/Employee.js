import React, { Component, Fragment } from "react";
import classes from "../Employee/Employee.css";
import withClass from "../../HOC/WithClass";
import PropTypes from "prop-types";

// import Radium from 'radium';

class Employee extends Component {
  render() {
    console.log("[Employee.js rendering");
    return (
      <Fragment>
        <p onClick={this.props.click}>
          Name is: {this.props.name} and my age is {this.props.age}
        </p>
        <input
          style={styles.inputStyle}
          type="text"
          onChange={this.props.changeOnInput}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

const styles = {
  inputStyle: {
    width: "60%",
    margin: "16px auto",
    border: "1px solid #eee",
    padding: "16px",
  },
};

Employee.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changeOnInput: PropTypes.func,
};

export default withClass(Employee, classes.Person);
