import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../../../components/User/User';
import userStubs from '../../stubs/userDataStub';
import userActivityStubs from '../../stubs/userActivityStub';
import userRepositoriesStubs from '../../stubs/userRepositoriesStub';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUser = jest.fn();
const mockFetchUserActivity = jest.fn();
const mockfetchUserRepositories = jest.fn();

let userProps = {
  error: null,
  user: null,
  pending: false,
  userActivityPending: false,
  userActivity: [],
  userRepositoriesPending: false,
  userRepositories: [],
  userRepositoriesError: null,
  fetchUser: mockFetchUser,
  fetchUserActivity: mockFetchUserActivity,
  fetchUserRepositories: mockfetchUserRepositories,
};

let wrapper;

describe('User Component', () => {
  describe('When Pending is true', () => {
    beforeEach(() =>  {
      userProps.pending = true;
      wrapper = mount(<User {...userProps}/>);
    });

    it('should display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeTruthy();
      expect(wrapper.find('.spinner-grow').text()).toEqual('Loading...');
    });

    it('should not display an error message', () => {
      expect(wrapper.find('.alert')).toBeTruthy();
    });
  });

  describe('When UserActivityPending is true', () => {
    beforeEach(() =>  {
      userProps.userActivityPending = true;
      wrapper = mount(<User {...userProps}/>);
    });

    it('should display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeTruthy();
      expect(wrapper.find('.spinner-grow').text()).toEqual('Loading...');
    });

    it('should not display an error message', () => {
      expect(wrapper.contains('.alert')).toBeFalsy();
    });
  });

  describe('When UserRepositoriesPending is true', () => {
    beforeEach(() =>  {
      userProps.userRepositoriesPending = true;
      wrapper = mount(<User {...userProps}/>);
    });

    it('should display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeTruthy();
      expect(wrapper.find('.spinner-grow').text()).toEqual('Loading...');
    });

    it('should not display an error message', () => {
      expect(wrapper.contains('.alert')).toBeFalsy();
    });
  });

  describe('When Pending is false and a user is not returned',() =>{    
    beforeEach(() => {
      userProps.pending = false;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.contains('.spinner-grow')).toBeFalsy();
    });

    it('should display an error message', () => {
      expect(wrapper.find('.alert.alert-warning')).toBeTruthy();
      expect(wrapper.find('.alert.alert-warning').text()).toEqual('User could not be found.');
    });
  });

  describe('When Pending, userActivityPending and userRepositoriesPending is false and a user is returned', () => {
    beforeEach(() => {
      userProps.user = userStubs[0];
      userProps.userActivity = userActivityStubs;
      userProps.userRepositories = userRepositoriesStubs;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner and load the various parts', () => {
      expect(wrapper.contains('.spinner-grow')).toBeFalsy();
      expect(wrapper.find('.jumbotron')).toBeTruthy();
      expect(wrapper.find('.activity-list')).toBeTruthy();
      expect(wrapper.find('.repository-list')).toBeTruthy();
    });
  });

  describe('When an error is returned',() =>{ 
    beforeEach(() => {
      userProps.error = 'There was a problem';
      userProps.user = null;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.contains('.spinner-grow')).toBeFalsy();
    });

    it('should display an error message', () => {
      expect(wrapper.find('.alert.alert-danger')).toBeTruthy();
      expect(wrapper.find('.alert.alert-danger').text()).toEqual('There was a problem');
    });
  });
});