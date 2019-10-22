import React, { Fragment, Component } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import axios from "axios";
class Home extends Component {
  state = {
    users: [],
    loading: false
  };
  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
  //   );
  //   this.setState({
  //     loading: false,
  //     users: res.data
  //   });
  // }
  clearUsers = e => {
    this.setState({
      users: [],
      loading: false
    });
  };
  searchUsers = async text => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
    this.setState({
      loading: false,
      users: res.data.items
    });
  };
  render() {
    return (
      <Fragment>
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}

export default Home;
