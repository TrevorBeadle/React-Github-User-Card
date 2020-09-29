import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/TrevorBeadle`)
      .then((res) => {
        this.setState({ ...this.state, users: res.data });
        axios
          .get(res.data.followers_url)
          .then((res) => {
            res.data.forEach((follower) => {
              axios
                .get(follower.url)
                .then((res) => {
                  this.setState({ ...this.state, users: res.data });
                })
                .catch((err) => console.log(err));
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
