import React, { Component } from 'react';
import Calendar from './Calendar';
import moment from 'moment';

class CheckOutDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutDate: '',
      modalOpen: false,
      // `${new Date().getMonth() + 1}/${new Date().getDate() + 1}/${new Date().getFullYear().toString().substr(-2)}`,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(date) {
    const stringDate = date.toString();
    const formattedDate = moment(stringDate).format('M-D-YYYY');
    this.setState({
      checkOutDate: formattedDate,
    });
    this.props.updateCheckout(formattedDate);
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
            <span>Check Out</span>
            <br />
            <span>{this.state.checkOutDate}</span>
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
          <span>Check Out</span>
          <br />
          <span>{this.state.checkOutDate}</span>
        </div>
      </div>
    );
  }
}

export default CheckOutDate;
