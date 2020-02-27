import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from '../../../components/Users/List';
import userStubs from '../../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

describe('List Component', () => {
  let wrapper;
  
  describe('No results', () => {
    it('should display a no results message', () => {
      wrapper = shallow(<List users={[]} />).dive();
      expect(wrapper.contains('.top-margin')).toBeFalsy();
      expect(wrapper.find('.alert')).toBeTruthy();
      expect(wrapper.find('.alert').text()).toEqual('There are no results for this term, please try again.');
    });
  });

  describe('With Results', () => {
    it('should render a list', () => {
      wrapper = shallow(<List users={userStubs} />).dive();
      expect(wrapper.contains('.alert')).toBeFalsy();
      expect(wrapper.find('.top-margin')).toBeTruthy();
      expect(wrapper.children().length).toEqual(2);
    });
  });
});
