import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from '../../components/UserList';

Enzyme.configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('fetches data from server when server returns successful response', (done) => {
    const mockSuccess = {};
    const mockJson = Promise.resolve(mockSuccess);
    const mockFetchPromise = Promise.resolve({ json: () => mockJson });
    jest.spyOn(global, 'fetch').mockImplementation(() =>  mockFetchPromise);
    shallow(<UserList />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    global.fetch.mockClear();
    done();
  });
});