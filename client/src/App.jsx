import React from 'react';
import {Component} from 'react';
import CheckInDate from './CheckInDate.jsx';
import CheckOutDate from './CheckInDate.jsx';
import GuestSelector from './GuestSelector.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInDate: '',
            checkOutDate: '',
            rooms: 0,
            adults: 0,
            children: 0
        }
    }

    render() {
        return (
            <div>
                Hello World!
                <span>
                <CheckInDate checkInDate={this.state.checkInDate}/>
                <CheckOutDate checkOutDate={this.state.checkOutDate}/>
                <GuestSelector rooms={this.state.rooms} adults={this.state.adults} children={this.state.children} />
                </span>
            </div>
        )
    }
}

export default App;