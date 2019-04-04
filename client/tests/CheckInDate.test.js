import React from 'react';
import Jest, { jest } from 'jest';
import fetch from 'node-fetch';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, tsObjectKeyword } from '@babel/types';
import CheckInDate from '../components/CheckInDate';
import Calendar from '../components/Calendar';

configure({adapter: new Adapter()});


it('should handle click to open modal', () => {
  const state = {
    modalOpen: false,
  };

  const component = shallow(<CheckInDate {...state} onClick={() => { this.setState({ modalOpen: true }); }} />);
  component.simulate('click');
  expect(component.state.modalOpen).toBe(true);
})


it('should render Calendar when modal is open', () => {
  const state = {
    modalOpen: true,
  }
  const component = shallow(<CheckInDate {...state} />);
  expect(component.find(Calendar)).toHaveLength(1);
})