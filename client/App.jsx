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
      lowest: '',
      secondLowest: '',
      thirdLowest: '',
    };
    this.getLowestPrices = this.getLowestPrices.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
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
        console.log(sortedArray);
        this.setState({
          lowest: sortedArray[1],
          secondLowest: sortedArray[2],
          thirdLowest: sortedArray[3],
        });
      });
  }
  
  updatePrices(state) {
    this.setState({
      lowest: state.lowest,
      secondLowest: state.secondLowest,
      thirdLowest: state.thirdLowest,
    });
  }

  render() {
    return (
      <div>
        <span>Lowest prices for your stay</span>
        <span>
          <CheckInDate
            lowest={this.state.lowest}
            secondLowest={this.state.secondLowest}
            thirdLowest={this.state.thirdLowest}
            updatePrices={this.updatePrices}
            checkInDate={this.state.checkInDate}
          />
          <CheckOutDate
            lowest={this.state.lowest}
            secondLowest={this.state.secondLowest}
            thirdLowest={this.state.thirdLowest}
            checkOutDate={this.state.checkOutDate}
          />
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
