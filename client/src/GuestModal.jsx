import React from 'react';
import {Component} from 'react';

class GuestModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: 0,
            adults: 0,
            children: 0
        }
        this.increaseRooms = this.increaseRooms.bind(this);
        this.decreaseRooms = this.decreaseRooms.bind(this);
        this.increaseAdults = this.increaseAdults.bind(this);
        this.decreaseAdults = this.decreaseAdults.bind(this);
        this.increaseChildren = this.increaseChildren.bind(this);
        this.decreaseChildren = this.decreaseChildren.bind(this);
    }

    increaseRooms() {
        this.setState({
            rooms: this.state.rooms + 1
        })
    }

    decreaseRooms() {
        this.setState({
            rooms: this.state.rooms - 1
        })
    }

    increaseAdults() {
        this.setState({
            adults: this.state.adults + 1
        })
    }

    decreaseAdults() {
        this.setState({
            adults: this.state.adults - 1
        })
    }

    increaseChildren() {
        this.setState({
            children: this.state.children + 1
        })
    }

    decreaseChildren() {
        this.setState({
            children: this.state.children - 1
        })
    }

    render() {
        return (
            <div>
                <div>Rooms
                    <button onClick={this.decreaseRooms}>-</button>
                    {this.state.rooms}
                    <button onClick={this.increaseRooms}>+</button>
                </div>
                <div>Adults
                    <button onClick={this.decreaseAdults}>-</button>
                    {this.state.adults}
                    <button onClick={this.increaseAdults}>+</button>
                </div>
                <div>Children
                    <button onClick={this.decreaseChildren}>-</button>
                    {this.state.children}
                    <button onClick={this.increaseChildren}>+</button>
                </div>
            </div>
        )
    }
}

export default GuestModal;