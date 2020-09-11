import React, { Component, Fragment } from "react";
import "./App.css";
import Popular from "./components/Popular";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Popular />
        </div>
      </Fragment>
    );
  }
}
