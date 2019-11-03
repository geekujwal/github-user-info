import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { fetchUsers } from "../../actions/searchUserAction";
import { connect } from "react-redux";
import UserItem from "./UserItem";
class Users extends Component {
  render() {
    const { loading, users } = this.props;
    const userStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridGap: "1rem"
    };
    return (
      <div className="row" style={{ paddingTop: "5px" }}>
        {loading ? (
          <Spinner />
        ) : users ? (
          <div style={userStyle}>
            {users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading_stuffs
});
export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
