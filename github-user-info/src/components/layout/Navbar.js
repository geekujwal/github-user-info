import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    iconClassName: "fab fa-github 3x"
  };
  render() {
    return (
      <Fragment>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <i className={this.props.iconClassName}></i> {this.props.title}
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired
};
export default Navbar;
