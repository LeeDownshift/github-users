import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Activity from '../../../components/User/Activity';
import userActivityStubs from '../../stubs/userActivityStub';

Enzyme.configure({ adapter: new Adapter() });

describe('Activity Component', () => {
  const activity = userActivityStubs[0];
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Activity activity={activity} />);
  });

  it('should render', () => {
    expect(wrapper.find('.list-group-item')).toBeTruthy;
  });

  it('should contain a date', () => {
    expect(wrapper.find('h6').text()).toEqual('24 Feb 2020 at 7:43 AM:');
  });

  it('should contain a string describing the activity', () => {
    expect(wrapper.find('p').text()).toEqual('opened issue #140 on redwoodjs/redwood');
  });
});