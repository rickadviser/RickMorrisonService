import React, { Component } from 'react';
import GuestModal from './GuestModal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { guests, guestList, guestSelectorBox } from '../../public/css.css';
library.add(faUserFriends)

class GuestSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: 1,
      adults: 1,
      children: 0,
      modalOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleGlobalClick = this.handleGlobalClick.bind(this);
  }

  handleClick() {
    // pop up modal box
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  handleUpdate(state) {
    this.props.updatePrices(state);
    this.setState(state);
  }

  handleGlobalClick(event) {
    console.log(event.target.closest(`.${guestSelectorBox}`));
    if (!event.target.closest(`.${guestSelectorBox}`)) {
      this.setState({
        modalOpen: false,
      });
    } else {
      this.setState({
        modalOpen: true,
      });
    }
  }


  render() {
    let rooms = ' rooms, ';
    let adults = ' adults, ';
    let children = ' children';

    if (this.state.rooms === 1) {
      rooms = ' room, ';
    }
    if (this.state.adults === 1) {
      adults = ' adult, ';
    }
    if (this.state.children === 1) {
      children = ' child';
    }

    if (this.state.modalOpen === false) {
      return (
        <div id="guestSelectorBox" className={guestSelectorBox} onClick={this.handleClick}>
          <FontAwesomeIcon icon="user-friends" size="sm" color="gray" />
          <span className={guests}>Guests</span>
          <br />
          <div className={guestList}>
            {this.state.rooms}
            {rooms}
            {this.state.adults}
            {adults}
            {this.state.children}
            {children}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div id="guestSelectorBox" className={guestSelectorBox} onClick={this.handleClick}>
          <FontAwesomeIcon icon="user-friends" size="sm" color="gray" />
          <div>
            <span className={guests}>Guests</span>
            <br />
            <div className={guestList}>
              {this.state.rooms}
              {rooms}
              {this.state.adults}
              {adults}
              {this.state.children}
              {children}
            </div>
          </div>
        </div>
        <GuestModal
          rooms={this.state.rooms}
          adults={this.state.adults}
          children={this.state.children}
          handleUpdate={this.handleUpdate}
          handleGlobalClick={this.handleGlobalClick}
        />
      </div>
    );
  }
}

export default GuestSelector;
