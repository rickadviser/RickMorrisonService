import React, { Component } from 'react';
import { days, today, differentMonth, selection } from '../../public/calendar-css.css';

const Day = (props) => {
  const {
    day,
    day: {
      date,
      isCurrentMonth,
      isToday,
      number,
    },
    select,
    selected,
  } = props;

  return (
    <span 
      key={date.toString()} 
      className={`${days} ${isToday ?  today : ""} ${isCurrentMonth ? "" : differentMonth} ${date.isSame(selected) ? selection : ""}`}
      // className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
      onClick={()=>select(day)}>{number}</span>
  );
};

export default Day;

