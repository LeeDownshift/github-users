import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../../../components/User/User';
import userStubs from '../../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUser = jest.fn();
const userProps = {
  error: null,
  users: [],
  pending: false,
  fetchUser: mockFetchUser,
};

describe('User Component', () => {
  let wrapper;
  
  describe('When Pending is true', () => {
    beforeAll(() =>  {
      userProps.pending = true;
      wrapper = mount(<User {...userProps}/>);
    });

    it('should display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeTruthy;
      expect(wrapper.find('.spinner-grow .sr-only').text()).toEqual('Loading...');
    });

    it('should not display a list of users', () => {
      expect(wrapper.find('.card')).toBeFalsey;
    });

    it('should not display an error message', () => {
      expect(wrapper.find('.alert')).toBeFalsey;
    });
  });
});