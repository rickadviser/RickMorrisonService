import React, { Component } from 'react';


class CheckOutDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutDate: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      checkOutDate: value,
    });
  }

  render() {
    return (
      <div>
        <span>Check Out </span>
        <br />
        <span>{this.state.checkOutDate}</span>
        <input type="date" value={this.state.checkOutDate} onChange={this.handleChange} />
      </div>
    );
  }
}

export default CheckOutDate;
