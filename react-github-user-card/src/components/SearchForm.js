import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          value={this.props.search}
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
