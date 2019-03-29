import React, { Component } from 'react';
import moment from 'moment';
import DayNames from './DayNames';
import Week from './Week';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
      selected: moment().startOf('day'),
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.select = this.select.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
    this.renderMonthLabel = this.renderMonthLabel.bind(this);
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
      month: month.add(1, 'month'),
    });
  }

  select(day) {
    this.setState({
      month: day.date.clone(),
      selected: day.date,
    });
  }

  renderWeeks() {
    const weeks = [];
    let done = false;
    const date = this.state.month.clone().startOf('month').add('w' -1).day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const { month, selected } = this.state;
    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={day => this.select(day)}
          selected={selected}
        />,
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const {
      month,
    } = this.state;

    return <span className="month-label">{month.format('MMMM YYYY')}</span>;
  }

  render() {
    return (
      <section className="calendar">
        <header className="header">
          <div className="month-display row">
            <i className="arrow fa fa-angle-left" onClick={this.previous} />
            {this.renderMonthLabel()}
            <i className="arrow fa fa-angle-right" onClick={this.next} />
          </div>
          <DayNames />
        </header>
        {this.renderWeeks()}
      </section>
    );
  }
}

export default Calendar;



// var Calendar = React.createClass({
//   getInitialState: function() {
//     return {
//       month: this.props.selected.clone()
//     };
//   },

//   previous: function() {
//     var month = this.state.month;
//     month.add(-1, "M");
//     this.setState({ month: month });
//   },

//   next: function() {
//     var month = this.state.month;
//     month.add(1, "M");
//     this.setState({ month: month });
//   },

//   select: function(day) {
//     this.props.selected = day.date;
//     this.forceUpdate();
//   },

//   render: function() {
//     return <div>
//       <div className="header">
//         <i className="fa fa-angle-left" onClick={this.previous}></i>
//         {this.renderMonthLabel()}
//         <i className="fa fa-angle-right" onClick={this.next}></i>
//       </div>
//       <DayNames />
//       {this.renderWeeks()}
//     </div>;
//   },

//   renderWeeks: function() {
//     var weeks = [],
//       done = false,
//       date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday"),
//       monthIndex = date.month(),
//       count = 0;

//     while (!done) {
//       weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select=    {this.select} selected={this.props.selected} />);
//       date.add(1, "w");
//       done = count++ > 2 && monthIndex !== date.month();
//       monthIndex = date.month();
//     }

//     return weeks;
//   },

//   renderMonthLabel: function() {
//     return <span>{this.state.month.format("MMMM, YYYY")}</span>;
//   }
// });

// export default Calendar;
