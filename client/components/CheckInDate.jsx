import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Calendar from './Calendar';

class CheckInDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear().toString().substr(-2)}`,
      modalOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(date) {
    const stringDate = date.toString();
    const formattedDate = moment(stringDate).format('M-D-YYYY');
    this.setState({
      checkInDate: formattedDate,
    });
    this.props.updateCheckin(formattedDate);
    this.props.getLowestPrices();
    this.props.updatePrices(this.state);
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
          <div>
            <span>Check In</span>
            <br />
            <span>{this.state.checkInDate}</span>
          </div>
          <Calendar
            // onChange={() => this.props.updatePrices(this.state)}
            onChange={date => this.handleChange(date)}
          />
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
