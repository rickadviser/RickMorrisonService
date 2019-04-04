import React from 'react';
import Jest, { jest } from 'jest';
import fetch from 'node-fetch';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, tsObjectKeyword } from '@babel/types';
import GuestModal from '../components/GuestModal';

configure({adapter: new Adapter()});

it('should render a decreaseRooms button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#decreaseRooms')).toHaveLength(1);
})

it('should render an increaseRooms button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#increaseRooms')).toHaveLength(1);
})

it('should render a decreaseAdults button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#decreaseAdults')).toHaveLength(1);
})

it('should render an increaseAdults button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#increaseAdults')).toHaveLength(1);
})

it('should render a decreaseChildren button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#decreaseChildren')).toHaveLength(1);
})

it('should render an increaseChildren button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#increaseChildren')).toHaveLength(1);
})

it('should render an update button', () => {
  const component = shallow(<GuestModal />);
  expect(component.find('#update')).toHaveLength(1);
})