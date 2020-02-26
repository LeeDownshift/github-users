import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../../../components/User/User';
import userStubs from '../../stubs/userDataStub';
import userActivityStubs from '../../stubs/userActivityStub';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUser = jest.fn();
const mockFetchUserActivity = jest.fn();

let userProps = {
  error: null,
  user: null,
  pending: false,
  userActivityPending: false,
  userActivity: [],
  fetchUser: mockFetchUser,
  fetchUserActivity: mockFetchUserActivity,
};

let wrapper;
let spinner;
let alert;

describe('User Component', () => {
  afterEach(() => {
    userProps = {
      error: null,
      user: null,
      pending: true,
      fetchUser: mockFetchUser,
      fetchUserActivity: mockFetchUserActivity,
    };
  });

  describe('When Pending is true', () => {
    beforeEach(() =>  {
      userProps.pending = true;
      wrapper = mount(<User {...userProps}/>);
    });

    it('should display the loading spinner', () => {
      spinner = wrapper.find('.spinner-grow');
      expect(spinner).toBeTruthy;
      expect(spinner.text()).toEqual('Loading...');
    });

    it('should not display an error message', () => {
      alert = wrapper.find('.alert');
      expect(alert).toBeFalsey;
    });
  });

  describe('When UserActivityPending is true', () => {
    beforeEach(() =>  {
      userProps.userActivityPending = true;
      wrapper = mount(<User {...userProps}/>);
    });

    it('should display the loading spinner', () => {
      spinner = wrapper.find('.spinner-grow');
      expect(spinner).toBeTruthy;
      expect(spinner.text()).toEqual('Loading...');
    });

    it('should not display an error message', () => {
      alert = wrapper.find('.alert');
      expect(alert).toBeFalsey;
    });
  });

  describe('When Pending is false and a user is not returned',() =>{    
    beforeEach(() => {
      userProps.pending = false;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      spinner = wrapper.find('.spinner-grow');
      expect(spinner).toBeFalsey;
    });

    it('should display an error message', () => {
      alert = wrapper.find('.alert.alert-warning');
      expect(alert).toBeTruthy;
      expect(alert.text()).toEqual('User could not be found.');
    });
  });

  describe('When Pending and userActivityPending is false and a user is returned', () => {
    beforeEach(() => {
      userProps.user = userStubs[0];
      userProps.userActivity = userActivityStubs;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      spinner = wrapper.find('.spinner-grow');
      expect(spinner).toBeFalsey;
    });

    it('should render the UserDetail component', () => {  
      expect(wrapper.find('.jumbotron')).toBeTruthy;
    });

    it('should render the UserActivity component', () => {  
      expect(wrapper.find('.activity-list')).toBeTruthy;
    });
  });

  describe('When an error is returned',() =>{ 
    beforeEach(() => {
      userProps.error = 'There was a problem';
      userProps.user = null;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      spinner = wrapper.find('.spinner-grow');
      expect(spinner).toBeFalsey;
    });

    it('should display an error message', () => {
      alert = wrapper.find('.alert.alert-danger');
      expect(alert).toBeTruthy;
      expect(alert.text()).toEqual('There was a problem');
    });
  });
});