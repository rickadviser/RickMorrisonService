import React from 'react';
import Jest, { jest } from 'jest';
import fetch from 'node-fetch';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, tsObjectKeyword } from '@babel/types';
import Calendar from '../components/Calendar';
import DayNames from '../components/DayNames';
import Week from '../components/Week';

configure({adapter: new Adapter()});

it('should render a month label', () => {
  const component = mount(<Calendar />);
  expect(component.find(".month-label")).toHaveLength(1);
})

it('should render a calendar section', () => {
  const component = mount(<Calendar />);
  expect(component.find(".calendar")).toHaveLength(1);
})

it('should render a header', () => {
  const component = mount(<Calendar />);
  expect(component.find(".header")).toHaveLength(1);
})

it('should render DayNames without errors', () => {
  const component = shallow(<Calendar />);
  expect(component.find(DayNames)).toHaveLength(1);
});

it('should render weeks without errors', () => {
  const component = mount(<Calendar />);
  expect(component.find(Week)).toHaveLength(5);
})