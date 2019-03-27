import React, { Component } from 'react';
import GuestModal from './GuestModal';

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
  }

  handleClick() {
    // pop up modal box
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  handleUpdate(state) {
    console.log('handling update');
    this.setState(state);
  }


  render() {
    let rooms = 'rooms';
    let adults = 'adults';
    let children = 'children';

    if (this.state.rooms === 1) {
      rooms = 'room';
    }
    if (this.state.adults === 1) {
      adults = 'adult';
    }
    if (this.state.children === 1) {
      children = 'child';
    }

    if (this.state.modalOpen === false) {
      return (
        <div onClick={this.handleClick}>
          <span>Guests</span>
          {this.state.rooms}
          {rooms}
          {', '}
          {this.state.adults}
          {adults}
          {', '}
          {this.state.children}
          {children}
        </div>
      );
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          <span>Guests</span>
          {this.state.rooms}
          {rooms}
          {', '}
          {this.state.adults}
          {adults}
          {', '}
          {this.state.children}
          {children}
        </div>
        <GuestModal
          rooms={this.state.rooms}
          adults={this.state.adults}
          children={this.state.children}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default GuestSelector;
