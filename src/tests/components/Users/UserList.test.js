import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UsersList } from '../../../components/Users/UserList';
import userStubs from '../../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUsers = jest.fn();
const userProps = {
  error: null,
  users: [],
  pending: false,
  fetchUsers: mockFetchUsers,
};

describe('UserList component', () => {
  let wrapper;

  describe('When Pending is true',() =>{    
    beforeAll(() => {
      userProps.pending = true;
      wrapper = mount(<UsersList {...userProps} />);
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

  describe('When Pending is false and there are no users returned',() =>{    
    beforeAll(() => {
      userProps.pending = false;
      wrapper = mount(<UsersList {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;
    });

    it('should not display a list of users', () => {
      expect(wrapper.find('.card')).toBeFalsey;
    });

    it('should display an error message', () => {
      expect(wrapper.find('.alert')).toBeTruthy;
      expect(wrapper.find('.alert.alert-warning').text()).toEqual('There are no results for this term, please try again.');
    });
  });

  describe('When Pending is false and there are users returned',() =>{    
    beforeAll(() => {
      userProps.users = userStubs;
      wrapper = mount(<UsersList {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;
    });

    it('should not display a list of users', () => {
      expect(wrapper.find('.card')).toBeTruthy;
      expect(wrapper.find('.card').length).toEqual(2);
    });

    it('should not display an error message', () => {
      expect(wrapper.find('.alert')).toBeFalsey;
    });
  });

  describe('When an error is returned',() =>{    
    beforeAll(() => {
      userProps.error = 'There was a problem';
      userProps.users=[];
      wrapper = mount(<UsersList {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;
    });

    it('should not display a list of users', () => {
      expect(wrapper.find('.card')).toBeFalsey;
    });

    it('should display an error message', () => {
      expect(wrapper.find('.alert')).toBeTruthy;
      expect(wrapper.find('.alert.alert-danger').text()).toEqual('There was a problem');
    });
  });
});