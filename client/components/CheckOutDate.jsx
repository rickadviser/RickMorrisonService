import React, { Component } from 'react';
import Calendar from './Calendar';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { checkIcons, checkOutDiv, checkOutColorBox, checkOutBoxOpen, checkOutBoxClosed } from '../../public/css.css';

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
            <div className={checkOutDiv} onClick={this.handleClick}>
              <div className={checkOutColorBox}></div>
              <span className={checkOutBoxOpen}>
              <FontAwesomeIcon icon="calendar-day" size="sm" color="red" className={checkIcons} />
                <span> Check Out {moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
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
          <div className={checkOutDiv} onClick={this.handleClick}>
            <div className={checkOutColorBox}></div>
            <span className={checkOutBoxOpen}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="red" className={checkIcons} />
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
          <div className={checkOutDiv} onClick={this.handleClick}>
            <div className={checkOutColorBox}></div>
            <span className={checkOutBoxClosed}>
              <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
              <span> Check Out {moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={checkOutDiv} onClick={this.handleClick}>
          <div className={checkOutColorBox}></div>
          <span className={checkOutBoxClosed}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
            <span> Check Out {this.state.checkOutDate}</span>
          </span>
        </div>
      </div>
);
  }
}

export default CheckOutDate;
