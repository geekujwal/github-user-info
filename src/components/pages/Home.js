import React, { Component, Fragment } from "react";
import NavBar from "../layout/NavBar";
import SearchUser from "../users/SearchUser";
import Users from "../users/Users";

export default class Home extends Component {
  searchUsers = text => {
    console.log(text);
  };
  searsetAlertchUser = text => {
    console.log(text);
  };
  showClear = text => {
    console.log(text);
  };

  render() {
    return (
      <Fragment>
        <NavBar
          title="Github Profile Finder"
          iconClassName="fab fa-github 3x"
        />
        <div className="container">
          <SearchUser
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            setAlert={this.setAlert}
          />
          <Users />
        </div>
      </Fragment>
    );
  }
}
