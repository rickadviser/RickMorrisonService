import React, { Component } from 'react';
import moment from 'moment';
import { calendar, calendars, header, monthDisplay, monthLabel, arrowLeft, arrowRight, selectDate } from '../../public/calendar-css.css';
import DayNames from './DayNames';
import Week from './Week';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft);
library.add(faAngleRight);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
      selected: moment().startOf('day')
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const { month } = this.state;
    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const { month } = this.state;
    this.setState({
      month: month.add(1,'month'),
    });
  }
  
  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone().subtract(1, 'month'),
    });
    this.props.onChange(day.date);
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <Week
          key={date} 
          date={date.clone()} 
          month={month} 
          select={(day)=>this.select(day)} 
          selected={selected}
        />
      );

      date.add(1, "w");
      
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
    const { month } = this.state;

    return <span className={monthLabel}>{month.format('MMMM YYYY')}</span>;
  }

  renderNextMonthLabel() {
    const { month } = this.state;
    const nextMonth = month.add(1, 'month');

    return <span className={monthLabel}>{nextMonth.format('MMMM YYYY')}</span> 
  }

  render() {
    return (
      <div className={calendars}>
        <section className={calendar}>
          <div className={selectDate}>Select a date</div>
          <header className={header}>
            <div className={monthDisplay}>
              <FontAwesomeIcon icon="angle-left" size="sm" className={arrowLeft} onClick={this.previous} />
              {this.renderMonthLabel()}
              {/* <FontAwesomeIcon icon="angle-right" size="sm" className={arrowRight} onClick={this.next} /> */}
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
        <section className={calendar}>
          <div className={selectDate}> to continue</div>
          <header className={header}>
            <div className={monthDisplay}>
              {/* <FontAwesomeIcon icon="angle-left" size="sm" className={arrowLeft} onClick={this.previous} /> */}
              {this.renderNextMonthLabel()}
              <FontAwesomeIcon icon="angle-right" size="sm" className={arrowRight} onClick={this.next} />
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
      </div>
    );
  }
}

export default Calendar;
