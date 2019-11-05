import React, { Component } from "react";
import NavBar from "../layout/NavBar";
export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="center">
          <h3>About Page</h3>
          By <p>Ujwal Lamichhane</p>
        </div>
      </div>
    );
  }
}
