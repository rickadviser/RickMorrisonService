import React, { Component } from 'react';
import { otherPrices, otherPricesColumnOne, otherPricesColumnTwo } from '../../public/css.css';

class OtherPrices extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={otherPrices} onClick={this.props.onClick}>
        <div className={otherPricesColumnOne}>
          <span>{this.props.fourthLowest[0]}...........${this.props.fourthLowest[1]}</span>
        <br />
        <span>   {this.props.fifthLowest[0]}...........${this.props.fifthLowest[1]}</span>
        </div>
        <br />
        <div className={otherPricesColumnTwo}>
        <span>{this.props.sixthLowest[0]}...........${this.props.sixthLowest[1]}    </span>
        <br />
        <span>View all deals</span>
        </div>
      </div>
    )
  }
}

export default OtherPrices;
