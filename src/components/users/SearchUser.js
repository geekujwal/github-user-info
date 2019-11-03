import React, { Component, Fragment } from "react";
import Alert from "../layout/Alert";
import { connect } from "react-redux";
import { fetchUsers, getUser } from "../../actions/searchUserAction";

class SearchUser extends Component {
  changeText = async e => {
    const textData = await e.target.value;
    this.props.getUser(textData);
    // this.props.fetchUsers(textData);
  };
  didSubmit = e => {
    e.preventDefault();
    this.props.fetchUsers(this.props.text);
  };
  clearText = e => {
    e.preventDefault();
    const emptyData = "";
    this.props.getUser(emptyData);
  };
  render() {
    const { text } = this.props;
    return (
      <Fragment>
        <Alert />
        <form className="form" onSubmit={this.didSubmit}>
          <div className=" row input-field col s6">
            <input
              type="text"
              name="text"
              value={text}
              onChange={this.changeText}
              className="validate"
              placeholder="Search github users..."
            />
            <label className="active" htmlFor="first_name2">
              Github Username
            </label>
            <button className="btn btn-dark btn-block">Search</button>
          </div>
        </form>
        <button onClick={this.clearText} className="btn btn-light btn-block">
          Clear
        </button>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading_stuffs,
  text: state.users.inputText
});
export default connect(
  mapStateToProps,
  { fetchUsers, getUser }
)(SearchUser);
