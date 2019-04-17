import React, { Component } from 'react';
import GuestModal from './GuestModal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { guests, guestList, guestSelectorBox, guestSelector } from '../../public/css.css';
library.add(faUserFriends)

class GuestSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rooms = ' rooms, ';
    let adults = ' adults, ';
    let children = ' children';

    if (this.props.rooms === 1) {
      rooms = ' room, ';
    }
    if (this.props.adults === 1) {
      adults = ' adult, ';
    }
    if (this.props.children === 1) {
      children = ' child';
    }

    if (this.props.guestModalOpen === false) {
      return (
        <div id="guestSelectorBox" className={guestSelectorBox} onClick={this.props.handleGuestClick}>
          <FontAwesomeIcon icon="user-friends" size="sm" color="gray" />
          <span className={guests}>Guests</span>
          <br />
          <div className={guestList}>
            {this.props.rooms}
            {rooms}
            {this.props.adults}
            {adults}
            {this.props.children}
            {children}
          </div>
        </div>
      );
    }
    return (
      <div className={guestSelector}>
        <div id="guestSelectorBox" className={guestSelectorBox} onClick={this.props.handleGuestClick}>
          <FontAwesomeIcon icon="user-friends" size="sm" color="gray" />
          <div>
            <span className={guests}>Guests</span>
            <br />
            <div className={guestList}>
              {this.props.rooms}
              {rooms}
              {this.props.adults}
              {adults}
              {this.props.children}
              {children}
            </div>
          </div>
        </div>
        <GuestModal
          rooms={this.props.rooms}
          adults={this.props.adults}
          children={this.props.children}
          handleUpdate={this.props.handleUpdate}
          handleGlobalClick={this.props.handleGlobalClick}
        />
      </div>
    );
  }
}

export default GuestSelector;
