import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserCard from '../../components/UserCard';
import userStubs from '../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

describe('UserCard', () => {
  const user = userStubs[0];
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<UserCard user={user} />);
  });

  it('should render a UserCard', () => {
    expect(wrapper.find('.card')).toBeTruthy;
    expect(wrapper.find('.card-image-top'));
    expect(wrapper.find('img').props().src).toEqual(user.avatar_url);
    expect(wrapper.find('.h5').props().children).toEqual(user.login);
    expect(wrapper.find('.card-link').props().href).toEqual(`/users/${user.login}`);
    expect(wrapper.find('.card-link').props().children).toEqual('View')
  });
});