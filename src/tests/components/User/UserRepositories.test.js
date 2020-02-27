import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserRepositories from '../../../components/User/UserRepositories';
import userRepositoriesStubs from '../../stubs/userRepositoriesStub';

Enzyme.configure({ adapter: new Adapter() });

describe('UserRepositories Component', () => {
  let wrapper; 

  beforeAll(() => {
    wrapper = mount(<UserRepositories repositories={userRepositoriesStubs} />);
  });

  it('should render the component', () => {
    expect(wrapper.find('.repository-list')).toBeTruthy();
  });

  it('should have a header', () => {
    expect(wrapper.find('h2')).toBeTruthy();
    expect(wrapper.find('h2').text()).toEqual('Repositories:');
  });

  it('should have a list of items', () => {
    const listGroup = wrapper.find('div.list-group');
    expect(listGroup).toBeTruthy();
    expect(listGroup.children().length).toEqual(4);
  });
});