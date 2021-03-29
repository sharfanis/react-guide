import React, { Component, Fragment } from "react";
import classes from "../Employee/Employee.css";
import withClass from "../../HOC/WithClass";
import PropTypes from "prop-types";

// import Radium from 'radium';

class Employee extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  // Executes after render()
 componentDidMount() {
   this.inputElementRef.current.focus();
  // this.inputElement.focus();
 }

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
         // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
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
