import React from 'react';
import {Component} from 'react';

class CheckInDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState({
            checkInDate: value
        })
    }

    render() {
        return (
            <div>
                <input type="date" value={this.state.checkInDate} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default CheckInDate;