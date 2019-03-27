import React, { Component } from 'react';
import CheckInDate from './CheckInDate';
import CheckOutDate from './CheckOutDate';
import GuestSelector from './GuestSelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: new Date().getDate(),
      checkOutDate: '',
      rooms: 0,
      adults: 0,
      children: 0,
    };
  }

  render() {
    return (
      <div>
        <span>Hello World!</span>
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
