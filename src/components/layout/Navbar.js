import React, { Fragment } from "react";

const Navbar = props => {
  const { iconClassName, title } = props;
  return (
    <Fragment>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <i className={iconClassName}></i> {title}
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  iconClassName: "fab fa-github 3x"
};

export default Navbar;
