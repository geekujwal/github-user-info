import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text.length <= 0) {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: ""
      });
    }
  };
  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <Fragment>
        <form className="form" onSubmit={this.onSubmit}>
          <div className=" row input-field col s6">
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              className="validate"
              placeholder="Search github users..."
            />
            <label className="active" htmlFor="first_name2">
              Github Username
            </label>
            <button className="btn btn-dark btn-block">Search</button>
          </div>
        </form>
        {showClear ? (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        ) : null}
      </Fragment>
    );
  }
}
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};
export default Search;
