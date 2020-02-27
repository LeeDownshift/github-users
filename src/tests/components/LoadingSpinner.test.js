import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingSpinner from '../../components/LoadingSpinner';

Enzyme.configure({ adapter: new Adapter() });

describe('LoadingSpinner Component', () => {
  let wrapper;

  it('Should display a spinner', () => {
    wrapper = shallow(<LoadingSpinner />).dive();
    expect(wrapper.find('.top-margin')).toBeTruthy();
    expect(wrapper.find('.spinner-grow')).toBeTruthy();
    expect(wrapper.find('.sr-only').text()).toEqual('Loading...');
  });
});