import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      'name': 'Nguyễn Văn Tài'
    }
  }
  stick() {
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.stick(), 
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
