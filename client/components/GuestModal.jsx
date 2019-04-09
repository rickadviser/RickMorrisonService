import React, { Component } from 'react';
import { guestNumbers } from '../../public/css.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBed, faChild } from '@fortawesome/free-solid-svg-icons';
import { updateButton, modalButtons, plusMinusButtons, guestModal } from '../../public/css.css';
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
      modalOpen: false,
    };
    this.increaseRooms = this.increaseRooms.bind(this);
    this.decreaseRooms = this.decreaseRooms.bind(this);
    this.increaseAdults = this.increaseAdults.bind(this);
    this.decreaseAdults = this.decreaseAdults.bind(this);
    this.increaseChildren = this.increaseChildren.bind(this);
    this.decreaseChildren = this.decreaseChildren.bind(this);
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
      <div className={`${modalButtons} ${guestModal}`}>
        <div>
          <FontAwesomeIcon icon="bed" color="gray" />
          <span>Rooms</span>
          <span className={guestNumbers}>
            <button type="button" className={plusMinusButtons} id="decreaseRooms" onClick={this.decreaseRooms}>-</button>
            {this.state.rooms}
            <button type="button" className={plusMinusButtons} id="increaseRooms" onClick={this.increaseRooms}>+</button>
          </span>
        </div>
        <br/>
        <div>
          <FontAwesomeIcon icon="user-friends" color="gray" />
          <span>Adults</span>
          <span className={guestNumbers}>
            <button type="button" className={plusMinusButtons} id="decreaseAdults" onClick={this.decreaseAdults}>-</button>
            {this.state.adults}
            <button type="button" className={plusMinusButtons} id="increaseAdults" onClick={this.increaseAdults}>+</button>
          </span>
        </div>
        <br/>
        <div>
          <FontAwesomeIcon icon="child" color="gray" />
          <span>Children</span>
          <span className={guestNumbers}>
            <button type="button" className={plusMinusButtons} id="decreaseChildren" onClick={this.decreaseChildren}>-</button>
            {this.state.children}
            <button type="button" className={plusMinusButtons} id="increaseChildren" onClick={this.increaseChildren}>+</button>
          </span>
        </div>
        <br/>
        <div>
          <button type="button" id="update" className={updateButton} onClick={() => this.props.handleUpdate(this.state)}>Update</button>
        </div>
      </div>
    );
  }
}

export default GuestModal;
