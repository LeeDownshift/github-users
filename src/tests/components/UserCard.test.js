import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserCard from '../../components/UserCard';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  login: 'LeeDownshift',
  id: 36741,
  avatar_url: "https://avatars0.githubusercontent.com/u/36741?v=4",
}

describe('UserCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserCard user={user} />, div);
  });

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<UserCard user={user} />);
  });

  describe('image', () => {
    let cardImage;
    
    beforeAll(() => {
      cardImage = wrapper.find('.card-img-top').props();
    });
    
    it('should display an avatar', () => {;
      expect(cardImage.src).toBe(user.avatar_url);
    });

    it('should have alt tag text', () => {
      expect(cardImage.alt).toBe(user.login);
    })
  });

  describe('title', () => {
    it('should have the users name and login', () => {
      expect(wrapper.find('.card-title').text()).toBe(user.login);
    });
  });
});