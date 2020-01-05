import React, { Component } from "react";

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      description: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div>Sử dụng Formik để thao tác với </div>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="text"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <textarea
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
            />
          </label>
        </form>
      </div>
    );
  }
}
