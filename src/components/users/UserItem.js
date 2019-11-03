import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class UserItem extends Component {
  render() {
    const { login, avatar_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          className="round-img"
          style={{ width: "60px" }}
          src={avatar_url}
          alt={login}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    );
  }
}
