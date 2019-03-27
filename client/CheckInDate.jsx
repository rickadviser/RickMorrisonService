import React, { Component } from 'react';


class CheckInDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '',
      // ((new Date().getMonth() + 1 + '/') + (new Date().getDate() + 1) + (new Date().getYear()))
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      checkInDate: value,
    });
  }

  render() {
    return (
      <div>
        <span>Check In</span>
        <br />
        <span>{this.state.checkInDate}</span>
        {/* <Calendar onChange={this.handleChange} value={this.state.checkInDate}/> */}
        <input type="date" value={this.state.checkInDate} onChange={this.handleChange} />
        {/* <DatePicker selected={this.state.checkInDate} onChange={this.handleChange} /> */}
      </div>
    );
  }
}

export default CheckInDate;
