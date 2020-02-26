import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDetail from '../../../components/User/UserDetail';
import userStubs from '../../stubs/userDataStub';

Enzyme.configure({ adapter: new Adapter() });

describe('UserDetail Component', () => {
  const user = userStubs[0];
  let wrapper;
  let jumbotron;

  beforeAll(() => {
    wrapper = mount(<UserDetail user={user} />);
    jumbotron = wrapper.find('.jumbotron');
  });

  it('should render a jumbotron', () => {
    expect(jumbotron).toBeTruthy;
  });

  it('should render the users avatar image', () => {
    const avatar = jumbotron.find('img.rounded');
    expect(avatar).toBeTruthy;
    expect(avatar.prop('src')).toEqual(user.avatar_url);
  });

  it('should render a header tag with the users name', () => {
    const header = jumbotron.find('h1');
    expect(header).toBeTruthy;
    expect(header.text()).toEqual(`${user.name} (${user.login})`);
  });

  it('should render an unordered list displayin the users details', () => {
    const infoList = jumbotron.find('ul');
    expect(infoList).toBeTruthy;
    expect(infoList.children().length).toEqual(4);
  
    infoList.children().forEach((item, i) => {
      if(i === 0) expect(item.text()).toEqual(`Location: ${user.location}`);
      if(i === 1) expect(item.text()).toEqual(`Blog: ${user.blog}`);
      if(i === 2) expect(item.text()).toEqual(`Followers: ${user.followers}`);
      if(i === 3) expect(item.text()).toEqual(`Following: ${user.following}`);
    });
  });
});