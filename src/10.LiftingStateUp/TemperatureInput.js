import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};
export class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.props.onTemperaturChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Nhập vào nhiệt độ {scaleNames[scale]}: </legend>
        <input type="number" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
