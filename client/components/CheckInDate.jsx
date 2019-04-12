import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Calendar from './Calendar';
import CheckInCalendar from './CheckInCalendar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { checkIcons, checkInDiv, checkInBoxOpen, checkInBoxClosed, checkInColorBox } from '../../public/css.css'
library.add(faCalendarDay);

class CheckInDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '__/__/__',
      // `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear().toString().substr(-2)}`,
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
      modalOpen: false,
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
      if (this.state.checkInDate !== '__/__/__') {
        return (
          <div>
            <div className={checkInDiv} onClick={this.handleClick}>
              <div className={checkInColorBox}>
              </div>              
              <span className={checkInBoxOpen}>
                <FontAwesomeIcon icon="calendar-day" size="sm" color="green" className={checkIcons} />
                <span> Check In {moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
              </span>
            </div>
            <CheckInCalendar
              // onChange={() => this.props.updatePrices(this.state)}
              onChange={date => this.handleChange(date)}
            />
          </div>
        );
      }
      return (
        <div>
          <div className={checkInDiv} onClick={this.handleClick}>
            <span className={checkInColorBox}></span>
            <span className={checkInBoxOpen}>
              <FontAwesomeIcon icon="calendar-day" size="sm" color="green" className={checkIcons} />
              <span> Check In {this.state.checkInDate}</span>
            </span>
          </div>
          <CheckInCalendar
            // onChange={() => this.props.updatePrices(this.state)}
            onChange={date => this.handleChange(date)}
          />
        </div>
      );
    }
    if (this.state.checkInDate !== '__/__/__') {
      return (
        <div>
          <div className={checkInDiv} onClick={this.handleClick}>
          <div className={checkInColorBox}>
          </div>
            <span className={checkInBoxClosed}>
              <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
              <span> Check In {moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={checkInDiv} onClick={this.handleClick}>
          <div className={checkInColorBox}>
          </div>
          <span className={checkInBoxClosed}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
            <span> Check In {this.state.checkInDate}</span>
          </span>
          </div>
      </div>
);
  }
}

export default CheckInDate;
