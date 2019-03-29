import React, { Component } from 'react';
import CheckInDate from './CheckInDate';
import CheckOutDate from './CheckOutDate';
import GuestSelector from './GuestSelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear().toString()}`,
      checkOutDate: '',
      rooms: 0,
      adults: 0,
      children: 0,
    };
  }

  componentDidMount() {
    console.log('current state date type:', typeof this.state.checkInDate)
    fetch(`http://localhost:8080/prices/${this.state.checkInDate}`)
      .then(res => res.text())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <span>Lowest prices for your stay</span>
        <span>
          <CheckInDate checkInDate={this.state.checkInDate} />
          <CheckOutDate checkOutDate={this.state.checkOutDate} />
          <GuestSelector
            rooms={this.state.rooms}
            adults={this.state.adults}
            children={this.state.children}
          />
        </span>
      </div>
    );
  }
}

export default App;
