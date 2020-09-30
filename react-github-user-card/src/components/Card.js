import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.user.avatar_url}
          alt={`${this.props.user.name}'s avatar`}
        />
        <div className="card-info">
          <h1 className="name">{this.props.user.name}</h1>
          <p className="username">{this.props.user.login}</p>
          <p className="location">{this.props.user.location}</p>
          <p>
            Profile:{" "}
            <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
          </p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
          <p>Bio: {this.props.user.bio ? this.props.user.bio : "N/A"}</p>
        </div>
      </div>
    );
  }
}

export default Card;
