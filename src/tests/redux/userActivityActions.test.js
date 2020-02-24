import fetchUserActivity from '../../redux/dispatchers/userActivityDispatcher';
import users from "../stubs/userDataStub";
import userActivity from "../stubs/userActivityStub";
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

  describe('USER_ACTIVITY', () => {
    describe("Success", () => {
      it("should dispatch FETCH_USER_ACTIVITY_PENDING and FETCH_USER_ACTIVITY_SUCCESS", () => {
        const store = mockStore({ userActivity: [] });
  
        nock(API_URL)
        .get(`/users/${user.login}/events`)
        .reply(200, userActivity);
  
        return store.dispatch(fetchUserActivity(user.login)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0].type).toEqual('FETCH_USER_ACTIVITY_PENDING');
          expect(expectedActions[1].type).toEqual('FETCH_USER_ACTIVITY_SUCCESS');
          expect(expectedActions[1].userActivity).toEqual(userActivity);
        });
      });
    });
  
    describe("Failure", () => {
      it("should dispatch FETCH_USER_ACTIVITY_PENDING and FETCH_USER_ACTIVITY_ERROR", () => {
        const error = {
          message: `request to ${API_URL}/users/${user.login}/events failed, reason: Not found`,
          type: 'system',
          errno: 404,
          code: 404 
        };
        const store = mockStore({ userActivity: [] });
  
        nock(API_URL)
        .get(`/users/${user.login}/events`)
        .replyWithError({code: 404, message: 'Not found'});
  
        return store.dispatch(fetchUserActivity(user.login)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0].type).toEqual('FETCH_USER_ACTIVITY_PENDING');
          expect(expectedActions[1].type).toEqual('FETCH_USER_ACTIVITY_ERROR');
          expect(expectedActions[1].error).toEqual(error);
        });
      });
    });
  });
});

