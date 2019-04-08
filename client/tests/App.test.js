import React from 'react';
import Jest, { jest } from 'jest';
import fetch from 'node-fetch';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, tsObjectKeyword } from '@babel/types';
import App from '../components/App';

configure({adapter: new Adapter()});

it('should render CheckInDate without errors', () => {
  const component = shallow(<App />);
  const checkInDate = component.find(`[data-test='checkInDate']`);
  expect(checkInDate.length).toBe(1);
})

it('should render CheckOutDate without errors', () => {
  const component = shallow(<App />);
  const checkOutDate = component.find(`[data-test='checkOutDate']`);
  expect(checkOutDate.length).toBe(1);
})

it('should render GuestSelector without errors', () => {
  const component = shallow(<App />);
  const guestSelector = component.find(`[data-test='guestSelector']`);
  expect(guestSelector.length).toBe(1);
})

it('should get lowest prices on mount', () => {
  const component = mount(<App />);
  expect(component.state.lowest).not.toBe('');
})
