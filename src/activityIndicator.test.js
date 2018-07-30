import React from 'react';
import activityIndicator from './activityIndicator';
import {shallow} from 'enzyme';

describe('activityIndicator', () => {
  it('should have the correct classnames', () => {
    const Test = () => (
      <div className='test' />
    );
    const ActivityIndicator = activityIndicator(Test, 0.8);
    const wrapper = shallow(<ActivityIndicator />);
    expect(wrapper.first().hasClass('rai-activity-indicator')).toBe(true);
  });
  it('should render the child component', () => {
    const Test = () => (
      <div className='test' />
    );
    const ActivityIndicator = activityIndicator(Test, 0.8);
    const wrapper = shallow(<ActivityIndicator />);
    expect(wrapper.exists('.test')).toBe(true);
  });
});
