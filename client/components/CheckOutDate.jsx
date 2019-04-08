import React, { Component } from 'react';
import Calendar from './Calendar';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import {checkInOut, checkIn, checkInBoxOpen, checkInBoxClosed, checkOut, checkOutBoxOpen, checkOutBoxClosed, checkOutColorBox } from '../../public/css.css';

library.add(faCalendarDay);

class CheckOutDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutDate: '__/__/__',
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
      if (this.state.checkOutDate !== '__/__/__') {
        return (
          <div>
            <div onClick={this.handleClick}>
            <div className={checkOutColorBox}>
          </div>  
              <span className={checkOutBoxOpen}>
              <FontAwesomeIcon icon="calendar-day" size="sm" color="red" />
                <span> Check Out {moment(this.state.checkOutDate.toString(), "ddd M-D-YY").toString().substring(0, 15)}</span>
              </span>
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
          <div className={checkOutColorBox}>
          </div>
            <span className={checkOutBoxOpen}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="red" />
              <span> Check Out {this.state.checkOutDate}</span>
            </span>
          </div>
          <Calendar
            // onChange={() => this.props.updatePrices(this.state)}
            onChange={date => this.handleChange(date)}
          />
        </div>
      );
    }
    if (this.state.checkOutDate !== '__/__/__') {
      return (
        <div>
        <div onClick={this.handleClick}>
        <div className={checkOutColorBox}>
          </div>
        <span className={checkOutBoxClosed}>
        <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" />
            <span> Check Out {moment(this.state.checkOutDate.toString(), "ddd M-D-YY").toString().substring(0, 15)}</span>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
    <div onClick={this.handleClick}>
    <div className={checkOutColorBox}>
          </div>
    <span className={checkOutBoxClosed}>
    <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" />
        <span> Check Out {this.state.checkOutDate}</span>
      </span>
    </div>
  </div>
);
  }
}

export default CheckOutDate;
