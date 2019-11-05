import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleUser } from "../../actions/searchUserAction";
import Spinner from "../layout/Spinner";
class User extends Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.login);
  }
  render() {
    const {
      location,
      name,
      avatar_url,
      followers,
      following,
      bio,
      company,
      blog,
      html_url,
      login,
      hireable,
      public_repos,
      public_gists
    } = this.props.user;
    return this.props.loading ? (
      <div className="container">
        <Spinner />
      </div>
    ) : (
      <div className="container">
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>

              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.users.user,
  loading: state.users.loading_stuffs
});
export default connect(
  mapStateToProps,
  { fetchSingleUser }
)(User);
