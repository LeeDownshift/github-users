import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Repository from '../../../components/User/Repository';
import userRepositoriesStubs from '../../stubs/userRepositoriesStub';

Enzyme.configure({ adapter: new Adapter() });

describe('Repository Component', () => {
  let wrapper;
  const repo = userRepositoriesStubs[0];

  beforeAll(() => {
    wrapper = mount(<Repository repo={repo} />);
  });

  it('should render the component', () => {
    expect(wrapper.find('.list-group-item')).toBeTruthy();
  });

  it('should contain the header', () => {
    expect(wrapper.find('h4')).toBeTruthy();
    expect(wrapper.find('h4').text()).toEqual(repo.name);
  });

  it('should contain the watchers count', () => {
    expect(wrapper.find('.watchers')).toBeTruthy();
    expect(wrapper.find('.watchers').hostNodes().text()).toEqual(`Watchers: ${repo.watchers_count}`);
  });

  it('should contain the starred count', () => {
    expect(wrapper.find('.starred')).toBeTruthy();
    expect(wrapper.find('.starred').hostNodes().text()).toEqual(`Starred: ${repo.stargazers_count}`);
  });
});