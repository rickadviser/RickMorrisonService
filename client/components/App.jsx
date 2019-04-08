import React, { Component } from 'react';
import fetch from 'node-fetch';
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
      lowest: '',
      secondLowest: '',
      thirdLowest: '',
    };
    this.getLowestPrices = this.getLowestPrices.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
    this.updateCheckin = this.updateCheckin.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
  }

  componentDidMount() {
    this.getLowestPrices();
  }

  getLowestPrices() {
    fetch(`http://localhost:8080/prices/${this.state.checkInDate}`)
      .then(res => res.json())
      .then((data) => {
        const tupleArray = Object.entries(data.result[0]);
        const sortedArray = tupleArray.sort((a, b) => {
          return a[1] > b[1] ? 1 : -1;
        });
        this.setState({
          lowest: sortedArray[1],
          secondLowest: sortedArray[2],
          thirdLowest: sortedArray[3],
        });
      });
  }

  updatePrices({ lowest, secondLowest, thirdLowest }) {
    this.setState({
      lowest,
      secondLowest,
      thirdLowest,
    });
  }

  updateCheckin(date) {
    this.setState({
      checkInDate: date,
    });
  }

  updateCheckout(date) {
    this.setState({
      checkOutDate: date,
    });
  }

  render() {
    // const { lowest, secondLowest, thirdLowest } = this.state;
    return (
      <div>
        <span>Lowest prices for your stay</span>
        <span>
          <CheckInDate
            updatePrices={this.updatePrices}
            getLowestPrices={this.getLowestPrices}
            checkInDate={this.state.checkInDate}
            updateCheckin={this.updateCheckin}
            data-test="checkInDate"
          />
          <CheckOutDate
            checkOutDate={this.state.checkOutDate}
            updateCheckout={this.updateCheckout}
            updatePrices={this.updatePrices}
            data-test="checkOutDate"
          />
          <GuestSelector
            rooms={this.state.rooms}
            adults={this.state.adults}
            children={this.state.children}
            data-test="guestSelector"
          />
        </span>
        <div>
          {this.state.lowest}
        </div>
        <div>
          {this.state.secondLowest}
        </div>
        <div>
          {this.state.thirdLowest}
        </div>
      </div>
    );
  }
}

export default App;