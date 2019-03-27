import React from 'react';
import {Component} from 'react';
import GuestModal from './GuestModal.jsx';

class GuestSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: 0,
            adults: 0,
            children: 0,
            modalOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // pop up modal box
        this.setState({
            modalOpen: true
        })
    }


    

    render() {
        if (this.state.modalOpen === false) {
            if (this.state.rooms === 1) {          
                return (
                <div onClick={this.handleClick}>
                    Guests <br/>
                    {this.state.rooms} room, {this.state.adults} adults, {this.state.children} children
                </div>
                )
         } else {
            return (
                <div onClick={this.handleClick}>
                    Guests <br/>
                    {this.state.rooms} rooms, {this.state.adults} adults, {this.state.children} children
                </div>
                )
            }
        } else {
            if (this.state.rooms === 1) {          
                return (
                    <div onClick={this.handleClick}>
                        Guests <br/>
                        {this.state.rooms} room, {this.state.adults} adults, {this.state.children} children
                        <GuestModal />
                    </div>
                )
            } else {
                return (
                    <div onClick={this.handleClick}>
                        Guests <br/>
                        {this.state.rooms} rooms, {this.state.adults} adults, {this.state.children} children
                        <GuestModal />
                    </div>
                )
            }
        }
    }
}

export default GuestSelector;