import React, { Component, Fragment } from "react";
import "./App.css";
// import Test from "./components/Test";
import Popular from "./components/Popular";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          {/* <Test /> */}
          <Popular />
        </div>
      </Fragment>
    );
  }
}
