import React, { Component } from "react";

import classes from "./App.css";
import Employees from "../Components/Employees/Employees";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../Components/HOC/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Shabih", age: 28 },
      { id: "2", name: "Natalia", age: 29 },
      { id: "3", name: "Oshu", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() { // RARELY USED
  //   console.log('[App.js] componentWillMount');
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[APP.JS] getSnapshotBeforeUpdate");
    return { message: "This is Snapshot From APP>JS!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[APP.JS] componentDidUpdate");
    console.log(snapshot);
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  toggleCockpitHandler = () => {
    //const doesShow = this.state.showCockpit;
    this.setState((prevState, props) => {
      return { showCockpit: !prevState.showCockpit };
    });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Employees
          persons={this.state.persons}
          deleteEmployee={this.deletePersonHandler}
          nameChange={this.nameChangedHandler}
        />
      );
    }

    return (
      // <WithClass -->  // This is a HOC
      //<WithClass classes={classes.App}>
      <div className={classes.App}>
        <button onClick={this.toggleCockpitHandler}>
          Remove Cockpit Component
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            // persons={this.state.persons}
            employeeVisibilityFlag={this.state.showPersons}
            toggleChange={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default withClass(App, classes.App);
