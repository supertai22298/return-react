import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }
  handleClick2(e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }
  handleClick3 = e => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={this.handleClick}>
                  {this.state.isToggleOn ? "Yes" : "No"}
                </button>
                <p>
                  {this.state.isToggleOn
                    ? "Button đang bật"
                    : "Button đang tắt"}
                </p>
              </td>
              <td>
                <button onClick={this.handleClick2.bind(this)}>
                  {this.state.isToggleOn ? "Yes" : "No"}
                </button>
                <p>
                  {this.state.isToggleOn
                    ? "Button đang bật"
                    : "Button đang tắt"}
                </p>
              </td>
              <td>
                <button onClick={e => this.handleClick3(e)}>
                  {this.state.isToggleOn ? "Yes" : "No"}
                </button>
                <p>
                  {this.state.isToggleOn
                    ? "Button đang bật"
                    : "Button đang tắt"}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
