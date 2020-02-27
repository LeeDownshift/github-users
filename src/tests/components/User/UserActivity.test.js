import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserActivity from '../../../components/User/UserActivity';
import userActivityStubs from '../../stubs/userActivityStub';

Enzyme.configure({ adapter: new Adapter() });

describe('UserActivity Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<UserActivity activity={userActivityStubs} />);
  });

  it('should render the component', () => {
    expect(wrapper.find('.activity-list')).toBeTruthy;
  });

  it('should have a header', () => {
    expect(wrapper.find('h2')).toBeTruthy;
    expect(wrapper.find('h2').text()).toEqual('Recent Activity:');
  });

  it('should have a list of items', () => {
    const listGroup = wrapper.find('div.list-group');
    expect(listGroup).toBeTruthy;
    expect(listGroup.children().length).toEqual(7);
  });
});