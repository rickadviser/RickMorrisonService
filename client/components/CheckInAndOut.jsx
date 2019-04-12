import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import CheckInCalendar from './CheckInCalendar';
import CheckOutCalendar from './CheckOutCalendar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { checkInOut, checkIcons, checkInDiv, checkInBoxOpen, checkInBoxClosed, checkInColorBox, checkOutDiv, checkOutColorBox, checkOutBoxClosed, checkOutBoxOpen } from '../../public/css.css'
library.add(faCalendarDay);

class CheckInAndOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: '__/__/__',
      inModalOpen: false,
      checkOutDate: '__/__/__',
      outModalOpen: false,
    };
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.handleClickIn = this.handleClickIn.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  handleChangeOne(date) {
    const stringDate = date.toString();
    const formattedDate = moment(stringDate).format('M-D-YYYY');
    this.setState({
      checkInDate: formattedDate,
      inModalOpen: false,
      outModalOpen: true,
    });
    this.props.updateCheckin(formattedDate);
    this.props.getLowestPrices();
    this.props.updatePrices(this.state);
  }

  handleChangeTwo(date) {
    const stringDate = date.toString();
    const formattedDate = moment(stringDate).format('M-D-YYYY');
    this.setState({
      checkOutDate: formattedDate,
      outModalOpen: false,
    });
    this.props.updateCheckout(formattedDate);
  }

  handleClickIn() {
    this.setState({
      inModalOpen: !this.state.inModalOpen,
    });
  }

  handleClickOut() {
    this.setState({
      outModalOpen: !this.state.outModalOpen,
    })
  }

  renderClosedBoxes() {
    let inDateFormat;
    let outDateFormat;
    if (this.state.checkInDate === '__/__/__') {
      inDateFormat = this.state.checkInDate;
    } else {
      inDateFormat = moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)
    }
    if (this.state.checkOutDate === '__/__/__') {
      outDateFormat = this.state.checkOutDate;
    } else {
      outDateFormat = moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)
    }
    return (
      <div className={checkInOut}>
        <div className={checkInDiv} onClick={this.handleClickIn}>
          <div className={checkInColorBox} />
          <span className={checkInBoxClosed}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
            <span> Check In {inDateFormat}</span>
          </span>
        </div>
        <div className={checkOutDiv} onClick={this.handleClickOut}>
          <div className={checkOutColorBox} />
          <span className={checkOutBoxClosed}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
            <span> Check Out {outDateFormat}</span>
          </span>
        </div>
      </div>
    )
  }

  renderOpenCheckIn() {
    let inDateFormat;
    let outDateFormat;
    if (this.state.checkInDate === '__/__/__' || this.state.checkOutDate === '__/__/__') {
      inDateFormat = this.state.checkInDate;
      outDateFormat = this.state.checkOutDate;
    } else {
      inDateFormat = moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)
      outDateFormat = moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)
    }
    return (
      <div className={checkInOut}>
        <div>
        <div className={checkInDiv} onClick={this.handleClickIn}>
          <div className={checkInColorBox}>
          </div>              
          <span className={checkInBoxOpen}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="green" className={checkIcons} />
            <span> Check In {inDateFormat}</span>
          </span>
        </div>
        <CheckInCalendar
          // onChange={() => this.props.updatePrices(this.state)}
          onChange={date => this.handleChangeOne(date)}
        />
      </div>
        <div className={checkOutDiv} onClick={this.handleClickOut}>
          <div className={checkOutColorBox}></div>
          <span className={checkOutBoxClosed}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
            <span> Check Out {outDateFormat}</span>
          </span>
        </div>
      </div>
    );
  }

  renderOpenCheckOut() {
    let inDateFormat;
    let outDateFormat;
    if (this.state.checkInDate === '__/__/__') {
      inDateFormat = this.state.checkInDate;
    } else {
      inDateFormat = moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)
    }
    if (this.state.checkOutDate === '__/__/__') {
      outDateFormat = this.state.checkOutDate;
    } else {
      outDateFormat = moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)
    }
    return (
      <div className={checkInOut}>
        <div className={checkInDiv} onClick={this.handleClickIn}>
          <div className={checkInColorBox} />
          <span className={checkInBoxClosed}>
            <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
            <span> Check In {inDateFormat}</span>
          </span>
        </div>
        <div>
          <div className={checkOutDiv} onClick={this.handleClickOut}>
            <div className={checkOutColorBox} />
            <span className={checkOutBoxOpen}>
              <FontAwesomeIcon icon="calendar-day" size="sm" color="red" className={checkIcons} />
              <span> Check Out {outDateFormat}</span>
            </span>
          </div>
          <CheckOutCalendar
            // onChange={() => this.props.updatePrices(this.state)}
            onChange={date => this.handleChangeTwo(date)}
            checkInDate={this.props.checkInDate}
          />
        </div>
      </div>
    )
  }

  render() {
    // both modals closed
    if (this.state.inModalOpen === false && this.state.outModalOpen === false) {
      return (
        <div className={checkInOut}>
          {this.renderClosedBoxes()}
        </div>
      );
    } if (this.state.inModalOpen === true && this.state.outModalOpen === false) {
      return (
        <div className={checkInOut}>
          {this.renderOpenCheckIn()}
        </div>
      );
    } if (this.state.inModalOpen === false && this.state.outModalOpen === true) {
      return (
        <div className={checkInOut}>
          {this.renderOpenCheckOut()}
        </div>
      );
    }
  }
}

// ______________________________________________________________

//     if (this.state.inModalOpen === true) {
//       if (this.state.checkInDate !== '__/__/__') {
//         return (
//           <div>
//             <div className={checkInDiv} onClick={this.handleClickIn}>
//               <div className={checkInColorBox}>
//               </div>              
//               <span className={checkInBoxOpen}>
//                 <FontAwesomeIcon icon="calendar-day" size="sm" color="green" className={checkIcons} />
//                 <span> Check In {moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
//               </span>
//             </div>
//             <CheckInCalendar
//               // onChange={() => this.props.updatePrices(this.state)}
//               onChange={date => this.handleChangeOne(date)}
//             />
//           </div>
//         );
//       }
//       return (
//         <div>
//           <div className={checkInDiv} onClick={this.handleClickIn}>
//             <span className={checkInColorBox}></span>
//             <span className={checkInBoxOpen}>
//               <FontAwesomeIcon icon="calendar-day" size="sm" color="green" className={checkIcons} />
//               <span> Check In {this.state.checkInDate}</span>
//             </span>
//           </div>
//           <CheckInCalendar
//             // onChange={() => this.props.updatePrices(this.state)}
//             onChange={date => this.handleChangeOne(date)}
//           />
//         </div>
//       );
//     } else if (this.state.inModalOpen === false) {
//       if (this.state.checkInDate !== '__/__/__') {
//         return (
//           <div>
//           <div className={checkInDiv} onClick={this.handleClickIn}>
//           <div className={checkInColorBox}>
//           </div>
//             <span className={checkInBoxClosed}>
//               <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
//               <span> Check In {moment(this.state.checkInDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
//             </span>
//           </div>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <div className={checkInDiv} onClick={this.handleClickIn}>
//           <div className={checkInColorBox}>
//           </div>
//           <span className={checkInBoxClosed}>
//             <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
//             <span> Check In {this.state.checkInDate}</span>
//           </span>
//           </div>
//       </div>
//     )}
// if (this.state.outModalOpen === true) {
//       if (this.state.checkOutDate !== '__/__/__') {
//         return (
//           <div>
//             <div className={checkOutDiv} onClick={this.handleClick}>
//               <div className={checkOutColorBox}></div>
//               <span className={checkOutBoxOpen}>
//               <FontAwesomeIcon icon="calendar-day" size="sm" color="red" className={checkIcons} />
//                 <span> Check Out {moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
//               </span>
//             </div>
//             <CheckOutCalendar
//               // onChange={() => this.props.updatePrices(this.state)}
//               onChange={date => this.handleChange(date)}
//             />
//           </div>
//         );
//       }
//       return (
//         <div>
//           <div className={checkOutDiv} onClick={this.handleClick}>
//             <div className={checkOutColorBox}></div>
//             <span className={checkOutBoxOpen}>
//             <FontAwesomeIcon icon="calendar-day" size="sm" color="red" className={checkIcons} />
//               <span> Check Out {this.state.checkOutDate}</span>
//             </span>
//           </div>
//           <CheckOutCalendar
//             // onChange={() => this.props.updatePrices(this.state)}
//             onChange={date => this.handleChange(date)}
//           />
//         </div>
//       );
//     } else if (this.state.outModalOpen === false) {
//       if (this.state.checkOutDate !== '__/__/__') {
//         return (
//           <div>
//           <div className={checkOutDiv} onClick={this.handleClick}>
//             <div className={checkOutColorBox}></div>
//             <span className={checkOutBoxClosed}>
//               <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
//               <span> Check Out {moment(this.state.checkOutDate.toString(), "ddd M-D-YYYY").toString().substring(0, 15)}</span>
//             </span>
//           </div>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <div className={checkOutDiv} onClick={this.handleClick}>
//           <div className={checkOutColorBox}></div>
//           <span className={checkOutBoxClosed}>
//             <FontAwesomeIcon icon="calendar-day" size="sm" color="gray" className={checkIcons} />
//             <span> Check Out {this.state.checkOutDate}</span>
//           </span>
//         </div>
//       </div>

//     )}
//   }
// }

export default CheckInAndOut;
