import React from 'react';
import Jest, { jest } from 'jest';
import fetch from 'node-fetch';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, tsObjectKeyword } from '@babel/types';
import GuestSelector from '../components/GuestSelector';

configure({adapter: new Adapter()});


it('should render guests count', () => {
  const component = shallow(<GuestSelector />);
  expect(component.find('.guests')).toHaveLength(1);
})