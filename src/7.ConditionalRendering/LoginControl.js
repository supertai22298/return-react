import React, { Component } from "react";
import Greeting from "./Greeting";
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLogoutClick = e => {
    this.setState({
      isLoggedIn: false
    });
  };
  handleLoginClick = e => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    );
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn}></Greeting>
        {button}
      </div>
    );
  }
}
