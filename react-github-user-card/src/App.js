import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
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

  render() {
    return <div className="App"></div>;
  }
}

export default App;
