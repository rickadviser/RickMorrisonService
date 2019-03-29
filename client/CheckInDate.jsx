import React, { Component } from 'react';
import Calendar from './Calendar';

class CheckInDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '',
      modalOpen: false,
      // `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear().toString().substr(-2)}`,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      checkInDate: event.toString().substring(0, 15),
      modalOpen: false,
    });
  }


  handleClick() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    if (this.state.modalOpen === true) {
      return (
        <div>
          <div onClick={this.handleClick}>
            <span>Check In</span>
            <br />
            <span>{this.state.checkInDate}</span>
          </div>
          <Calendar />
        </div>
      );
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          <span>Check In</span>
          <br />
          <span>{this.state.checkInDate}</span>
        </div>
      </div>
    );
  }
}

export default CheckInDate;
