import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../../../components/User/User';
import userStubs from '../../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

const mockFetchUser = jest.fn();
const userProps = {
  error: null,
  user: null,
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

    it('should not display an error message', () => {
      expect(wrapper.find('.alert')).toBeFalsey;
    });
  });

  describe('When Pending is false and a user is not returned',() =>{    
    beforeAll(() => {
      userProps.pending = false;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;
    });

    it('should display an error message', () => {
      expect(wrapper.find('.alert')).toBeTruthy;
      expect(wrapper.find('.alert.alert-warning').text()).toEqual('User could not be found.');
    });
  });

  describe('When an error is returned',() =>{    
    beforeAll(() => {
      userProps.error = 'There was a problem';
      userProps.user=null;
      wrapper = mount(<User {...userProps} />);
    });

    it('should not display the loading spinner', () => {
      expect(wrapper.find('.spinner-grow')).toBeFalsey;
    });

    it('should display an error message', () => {
      expect(wrapper.find('.alert')).toBeTruthy;
      expect(wrapper.find('.alert.alert-danger').text()).toEqual('There was a problem');
    });
  });
});