import React, { Component } from 'react';
import { guestNumbers } from '../../public/css.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBed, faChild } from '@fortawesome/free-solid-svg-icons';
import { whiteBackground, roomsColumnTwo, roomsLine, adultsLine, adultsColumnTwo, childrenLine, childrenColumnTwo, updateButton, modalButtons, plusMinusButtons, guestModal } from '../../public/css.css';
library.add(faUserFriends);
library.add(faBed);
library.add(faChild);

class GuestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: props.rooms,
      adults: props.adults,
      children: props.children,
    };
    this.increaseRooms = this.increaseRooms.bind(this);
    this.decreaseRooms = this.decreaseRooms.bind(this);
    this.increaseAdults = this.increaseAdults.bind(this);
    this.decreaseAdults = this.decreaseAdults.bind(this);
    this.increaseChildren = this.increaseChildren.bind(this);
    this.decreaseChildren = this.decreaseChildren.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.props.handleGlobalClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.props.handleGlobalClick, false);
  }

  increaseRooms() {
    this.setState({
      rooms: this.state.rooms + 1,
    });
  }

  decreaseRooms() {
    this.setState({
      rooms: this.state.rooms - 1,
    });
  }

  increaseAdults() {
    this.setState({
      adults: this.state.adults + 1,
    });
  }

  decreaseAdults() {
    this.setState({
      adults: this.state.adults - 1,
    });
  }

  increaseChildren() {
    this.setState({
      children: this.state.children + 1,
    });
  }

  decreaseChildren() {
    this.setState({
      children: this.state.children - 1,
    });
  }


  render() {
    return (
      <div id="guestModal" className={`${modalButtons} ${guestModal}`}>
        <div className={whiteBackground}>
          <div className={roomsLine}>
            <div>
              <FontAwesomeIcon icon="bed" color="gray" />
              <span>Rooms</span>
            </div>
            <div className={roomsColumnTwo}>
              <span className={guestNumbers}>
                <button type="button" className={plusMinusButtons} id="decreaseRooms" onClick={this.decreaseRooms}>-</button>
                {this.state.rooms}
                <button type="button" className={plusMinusButtons} id="increaseRooms" onClick={this.increaseRooms}>+</button>
              </span>
            </div>
          </div>
          <br/>
          <div className={adultsLine}>
            <div>
              <FontAwesomeIcon icon="user-friends" color="gray" />
              <span>Adults</span>
            </div>
            <div className={adultsColumnTwo}>
              <span className={guestNumbers}>
                <button type="button" className={plusMinusButtons} id="decreaseAdults" onClick={this.decreaseAdults}>-</button>
                {this.state.adults}
                <button type="button" className={plusMinusButtons} id="increaseAdults" onClick={this.increaseAdults}>+</button>
              </span>
            </div>
          </div>
          <br/>
          <div className={childrenLine}>
            <div>
              <FontAwesomeIcon icon="child" color="gray" />
              <span>Children</span>
            </div>
            <div className={childrenColumnTwo}>
              <span className={guestNumbers}>
                <button type="button" className={plusMinusButtons} id="decreaseChildren" onClick={this.decreaseChildren}>-</button>
                {this.state.children}
                <button type="button" className={plusMinusButtons} id="increaseChildren" onClick={this.increaseChildren}>+</button>
              </span>
            </div>
          </div>
          <br/>
          <div>
            <button type="button" id="update" className={updateButton} onClick={() => this.props.handleUpdate(this.state)}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestModal;
