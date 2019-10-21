import React, { Fragment, Component } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import axios from "axios";
class Home extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
    this.setState({
      loading: false,
      users: res.data
    });
    console.log(res.data);
  }
  render() {
    return (
      <Fragment>
        <Search />
        <Users loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}

export default Home;
