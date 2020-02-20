import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UsersList } from '../../components/UserList';
import userStubs from '../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

const users = {
  error: null,
  users: [],
  pending: false,
};

const mockFetchUsers = jest.fn();

let wrapper;
let store;

describe('UserList component', () => {
  describe('When Pending is true',() =>{    
    beforeAll(() => {
      wrapper = mount(
        <UsersList 
          fetchUsers={mockFetchUsers} 
          pending={true} 
          users={[]} 
          error={null}
        />
      );
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
      wrapper = mount(
        <UsersList 
          fetchUsers={mockFetchUsers} 
          pending={false} 
          users={[]} 
          error={null}
        />
      );
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;;
    });

    it('should not display a list of users', () => {
      expect(wrapper.find('.card')).toBeFalsey;
    });

    it('should not display an error message', () => {
      expect(wrapper.find('.alert')).toBeTruthy;
      expect(wrapper.find('.alert').text()).toEqual('There are no results for this term, please try again.');
    });
  });

  describe('When Pending is false and there are users returned',() =>{    
    beforeAll(() => {
      wrapper = mount(
        <UsersList 
          fetchUsers={mockFetchUsers} 
          pending={false} 
          users={userStubs} 
          error={null}
        />
      );
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;;
    });

    it('should not display a list of users', () => {
      expect(wrapper.find('.card')).toBeTruthy;
      expect(wrapper.find('.card').length).toEqual(2);
    });

    it('should not display an error message', () => {
      expect(wrapper.find('.alert')).toBeFalsey;
    });
  });
});