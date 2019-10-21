import React, { Component, Fragment } from "react";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <div className="container">
            <div class="nav-wrapper">
              <i class="fab fa-github 3x"></i> {this.props.title}
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
