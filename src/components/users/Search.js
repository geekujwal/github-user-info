import React, { Component, Fragment } from "react";

class Search extends Component {
  render() {
    return (
      <Fragment>
        <div className=" row input-field col s6">
          <input value="Alvin" type="text" className="validate" />
          <label className="active" htmlFor="first_name2">
            Github Username
          </label>
          <button className="waves-effect waves-light btn">Search</button>
        </div>
      </Fragment>
    );
  }
}

export default Search;
