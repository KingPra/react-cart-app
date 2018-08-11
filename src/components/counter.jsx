import React, { Component } from "react";

export default class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };
  // constructor is not needed to bind event handlers when using arrow functions
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // handleIncrement = product => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      //use React.Fragment to replace container div (optional if you dont want <div></div> as a container on html page).
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
