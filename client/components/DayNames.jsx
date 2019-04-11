import React from 'react';
import { dayNames, days } from '../../public/calendar-css.css';

const DayNames = () => (
  <div className={dayNames}>
    <span className={days} style={{ fontWeight: 'bold' }}>Sun</span>
    <span className={days}>Mon</span>
    <span className={days}>Tue</span>
    <span className={days}>Wed</span>
    <span className={days}>Thu</span>
    <span className={days}>Fri</span>
    <span className={days} style={{ fontWeight: 'bold' }}>Sat</span>
  </div>
);

export default DayNames;
