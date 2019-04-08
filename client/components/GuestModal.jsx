import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBed, faChild } from '@fortawesome/free-solid-svg-icons';
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
      <div>
        <div>
          <FontAwesomeIcon icon="bed" color="gray" />
          <span>Rooms</span>
          <button type="button" id="decreaseRooms" onClick={this.decreaseRooms}>-</button>
          {this.state.rooms}
          <button type="button" id="increaseRooms" onClick={this.increaseRooms}>+</button>
        </div>
        <div>
          <FontAwesomeIcon icon="user-friends" color="gray" />
          <span>Adults</span>
          <button type="button" id="decreaseAdults" onClick={this.decreaseAdults}>-</button>
          {this.state.adults}
          <button type="button" id="increaseAdults" onClick={this.increaseAdults}>+</button>
        </div>
        <div>
          <FontAwesomeIcon icon="child" color="gray" />
          <span>Children</span>
          <button type="button" id="decreaseChildren" onClick={this.decreaseChildren}>-</button>
          {this.state.children}
          <button type="button" id="increaseChildren" onClick={this.increaseChildren}>+</button>
        </div>
        <div>
          <button type="button" id="update" onClick={() => this.props.handleUpdate(this.state)}>Update</button>
        </div>
      </div>
    );
  }
}

export default GuestModal;
