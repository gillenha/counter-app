import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div className="container">
        <div className="row justify-content-md-left">
          <div className="col col-sm-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col col-sm-1">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
          </div>
          <div className="col col-sm-1">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-primary btn-sm"
            >
              -
            </button>
          </div>
          <div className="col col-sm-1">
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
