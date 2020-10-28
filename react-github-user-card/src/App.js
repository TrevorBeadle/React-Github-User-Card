import React from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
  state = {
    users: [],
    filteredUsers: [],
    search: "",
  };

  buildArray = async () => {
    const res = await axios.get(`https://api.github.com/users/TrevorBeadle`);
    const response = await axios.get(res.data.followers_url);
    const results = await Promise.all(
      response.data.map(follower => {
        return axios.get(follower.url);
      })
    );
    const resultData = results.map(result => result.data);
    this.setState({ users: [...this.state.users, res.data, ...resultData] });
  };

  componentDidMount() {
    this.buildArray();
  }

  search(user, value) {
    if (typeof user.name === "string") {
      const test = user.name.toLowerCase().includes(value.toLowerCase());
      if (test) return true;
    }
    return user.login.toLowerCase().includes(value.toLowerCase());
  }

  handleChange = e => {
    console.log(e.target, this.state.users, this.state.filteredUsers);
    this.setState({
      search: e.target.value,
      filteredUsers: this.state.users.filter(user =>
        this.search(user, e.target.value)
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <SearchForm
          users={this.state.users}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <Cards
          users={
            this.state.search.length
              ? this.state.filteredUsers
              : this.state.users
          }
        />
      </div>
    );
  }
}

export default App;
