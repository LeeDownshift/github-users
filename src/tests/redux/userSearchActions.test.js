import fetchUserSearch from '../../redux/dispatchers/userSearchDispatcher';
import users from "../stubs/userDataStub";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import nock from 'nock';
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_URL = 'https://api.github.com';

describe("User Search Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Success", () => {
    it("should dispatch FETCH_USER_SEARCH_PENDING and FETCH_USER_SEARCH_SUCCESS", () => {
      const searchResults = {
        total_count: 1,
        incomplete_results: false,
        items: [users[0]],
      }

      const store = mockStore({ users: [] });

      nock(API_URL)
      .get('/users?q=testUser1')
      .reply(200, searchResults);

      return store.dispatch(fetchUserSearch('testUser1')).then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions.length).toEqual(2);
        expect(expectedActions[0]).toEqual({ type: 'FETCH_USER_SEARCH_PENDING' });
        expect(expectedActions[1]).toEqual({ type: 'FETCH_USER_SEARCH_SUCCESS', searchResults });
      });
    });
  });

  describe("Failure", () => {
    it("should dispatch FETCH_USER_SEARCH_PENDING and FETCH_USER_SEARCH_ERROR", () => {
      const error = {
        message: `request to ${API_URL}/users?q=testUser1 failed, reason: Not found`,
        type: 'system',
        errno: 404,
        code: 404 
      };
      const store = mockStore({ users: [] });

      nock(API_URL)
      .get('/users?q=testUser1')
      .replyWithError({code: 404, message: 'Not found'});

      return store.dispatch(fetchUserSearch('testUser1')).then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions.length).toEqual(2);
        expect(expectedActions[0].type).toEqual('FETCH_USER_SEARCH_PENDING');
        expect(expectedActions[1].type).toEqual('FETCH_USER_SEARCH_ERROR');
        expect(expectedActions[1].error).toEqual(error); 
      });
    });
  });
});