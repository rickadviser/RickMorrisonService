import React, { Component } from 'react';
import fetch from 'node-fetch';
import CheckInDate from './CheckInDate';
import CheckOutDate from './CheckOutDate';
import GuestSelector from './GuestSelector';
import SiteDisplay from './SiteDisplay';
import OtherPrices from './OtherPrices';
import '../assets/FontAwesomeIcons';
import { wrapper, checkIn, checkInOut, checkOut, guestSelectorBox, guests, guestList, siteBoxes, siteDisplay, viewingHotel } from '../../public/css.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';
import CheckInAndOut from './CheckInAndOut';
library.add(faUserFriends)

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear().toString()}`,
      checkOutDate: '',
      guestModalOpen: false,
      rooms: 1,
      adults: 1,
      children: 0,
      lowest: '',
      secondLowest: '',
      thirdLowest: '',
      fourthLowest: '',
      fifthLowest: '',
      sixthLowest: '',
    };
    this.getLowestPrices = this.getLowestPrices.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
    this.updateCheckin = this.updateCheckin.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
  }

  componentDidMount() {
    this.getLowestPrices();
  }

  getLowestPrices() {
    fetch(`http://localhost:3001/prices/${this.state.checkInDate}`)
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
          fourthLowest: sortedArray[4],
          fifthLowest: sortedArray[5],
          sixthLowest: sortedArray[6],
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
      guestModalOpen: !this.state.guestModalOpen,
      checkOutDate: date,
    });
  }

  handleUpdate(state) {
    this.updatePrices(state);
    this.getLowestPrices();
    this.setState({ ...state, guestModalOpen: false });
  }

  handleGuestClick() {
    this.setState({
      guestModalOpen: !this.state.guestModalOpen,
    });
    // this.props.toggleModal(!this.props.modal);
  }

  render() {
    // const { lowest, secondLowest, thirdLowest } = this.state;
    return (
      <div className={wrapper}>
        <span className={viewingHotel}>
          <FontAwesomeIcon icon="user-friends" />
          12 people are viewing this hotel</span>
        <span>
          <div>
            <CheckInAndOut
              updatePrices={this.updatePrices}
              getLowestPrices={this.getLowestPrices}
              checkInDate={this.state.checkInDate}
              checkOutDate={this.state.checkOutDate}
              updateCheckin={this.updateCheckin}
              updateCheckout={this.updateCheckout}
              data-test="checkInAndOut"
            />
          </div>
          <br/>
          <div className={guestSelectorBox}>
            <GuestSelector
              rooms={this.state.rooms}
              adults={this.state.adults}
              children={this.state.children}
              updatePrices={this.updatePrices}
              getLowestPrices={this.getLowestPrices}
              handleGuestClick={this.handleGuestClick}
              handleUpdate={this.handleUpdate}
              guestModalOpen={this.state.guestModalOpen}
              data-test="guestSelector"
            />
          </div>
        </span>
        <br/>
        <div className={siteBoxes}>
          <div className={siteDisplay}>
            <SiteDisplay
              site={this.state.lowest}
              onClick={() => window.location.reload()}
            />
          </div>
          <div className={siteDisplay}>
            <SiteDisplay
              site={this.state.secondLowest}
              onClick={() => window.location.reload()}
            />
          </div>
          <div className={siteDisplay}>
            <SiteDisplay
              site={this.state.thirdLowest}
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
        <div>
          <OtherPrices
            fourthLowest={this.state.fourthLowest}
            fifthLowest={this.state.fifthLowest}
            sixthLowest={this.state.sixthLowest}
            onClick={() => window.location.reload()}
          />
        </div>
      </div>
    );
  }
}

export default App;
