import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Fetch weather data here 
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          placeholder="Get a 5-day Forecast For Your Favorite Cities"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
