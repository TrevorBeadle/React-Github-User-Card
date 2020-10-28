import React from "react";
import Card from "./Card";

class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        {this.props.users.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Cards;
