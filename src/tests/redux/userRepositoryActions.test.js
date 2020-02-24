import fetchUserRepositories from '../../redux/dispatchers/userRepositoriesDispatcher';
import users from "../stubs/userDataStub";
import userRepositories from "../stubs/userRepositoriesStub";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import nock from 'nock';
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_URL = 'https://api.github.com';
const user = users[0];

describe("User Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('USER_REPOSITORIES', () => {
    describe("Success", () => {
      it("should dispatch FETCH_USER_REPOSITORIES_PENDING and FETCH_USER_REPOSITORIES_SUCCESS", () => {
        const store = mockStore({ userRepositories: [] });
  
        nock(API_URL)
        .get(`/users/${user.login}/repos`)
        .reply(200, userRepositories);
  
        return store.dispatch(fetchUserRepositories(user.login)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0].type).toEqual('FETCH_USER_REPOSITORIES_PENDING');
          expect(expectedActions[1].type).toEqual('FETCH_USER_REPOSITORIES_SUCCESS');
          expect(expectedActions[1].userRepositories).toEqual(userRepositories);
        });
      });
    });
  
    describe("Failure", () => {
      it("should dispatch FETCH_USER_REPOSITORIES_PENDING and FETCH_USER_REPOSITORIES_ERROR", () => {
        const error = {
          message: `request to ${API_URL}/users/${user.login}/repos failed, reason: Not found`,
          type: 'system',
          errno: 404,
          code: 404 
        };
        const store = mockStore({ userRepositories: [] });
  
        nock(API_URL)
        .get(`/users/${user.login}/repos`)
        .replyWithError({code: 404, message: 'Not found'});
  
        return store.dispatch(fetchUserRepositories(user.login)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0].type).toEqual('FETCH_USER_REPOSITORIES_PENDING');
          expect(expectedActions[1].type).toEqual('FETCH_USER_REPOSITORIES_ERROR');
          expect(expectedActions[1].error).toEqual(error);
        });
      });
    });
  });
});

