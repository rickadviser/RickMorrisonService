import React, { Component } from 'react';

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

  handleChange(event) {
    this.setState({
      checkOutDate: event.toString().substring(0, 15),
      modalOpen: false,
    });
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
          <div onClick={this.handleClick}>
            <span>Check Out </span>
            <br />
            <span>{this.state.checkOutDate}</span>
          </div>
          <Calendar onChange={this.handleChange} />
        </div>
      );
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          <span>Check Out </span>
          <br />
          <span>{this.state.checkOutDate}</span>
        </div>
      </div>
    );
  }
}

export default CheckOutDate;
