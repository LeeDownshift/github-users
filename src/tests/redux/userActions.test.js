import fetchUsers from '../../redux/dispatchers/usersDispatcher';
import fetchUser from '../../redux/dispatchers/userDispatcher';
import users from "../stubs/userDataStub";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import nock from 'nock';
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_URL = 'https://api.github.com';

describe("User Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('USERS', () => {
    describe("Success", () => {
      it("should dispatch FETCH_USERS_PENDING and FETCH_USERS_SUCCESS", () => {
        const store = mockStore({ users: [] });
  
        nock(API_URL)
        .get('/users')
        .reply(200, users);
  
        return store.dispatch(fetchUsers()).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0]).toEqual({ type: 'FETCH_USERS_PENDING' });
          expect(expectedActions[1]).toEqual({ type: 'FETCH_USERS_SUCCESS', users });
        });
      });
    });
  
    describe("Failure", () => {
      it("should dispatch FETCH_USERS_PENDING and FETCH_USERS_ERROR", () => {
        const error = {
          message: `request to ${API_URL}/users failed, reason: Not found`,
          type: 'system',
          errno: 404,
          code: 404 
        };
        const store = mockStore({ users: [] });
  
        nock(API_URL)
        .get('/users')
        .replyWithError({code: 404, message: 'Not found'});
  
        return store.dispatch(fetchUsers()).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0].type).toEqual('FETCH_USERS_PENDING');
          expect(expectedActions[1].type).toEqual('FETCH_USERS_ERROR');
          expect(expectedActions[1].error).toEqual(error);
          
        });
      });
    });
  });

  describe('USER', () => {
    describe("Success", () => {
      it("should dispatch FETCH_USER_PENDING and FETCH_USER_SUCCESS", () => {
        const store = mockStore({ users: [] });
  
        nock(API_URL)
        .get('/users/' + users[0].login)
        .reply(200, users[0]);
  
        return store.dispatch(fetchUser(users[0].login)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toEqual(2);
          expect(expectedActions[0]).toEqual({ type: 'FETCH_USER_PENDING' });
          expect(expectedActions[1]).toEqual({ type: 'FETCH_USER_SUCCESS', user: users[0] });
        });
      });
    });
  
    it("should dispatch FETCH_USERS_PENDING and FETCH_USERS_ERROR", () => {
      const error = {
        message: `request to ${API_URL}/users/${users[0].login} failed, reason: Not found`,
        type: 'system',
        errno: 404,
        code: 404 
      };
      const store = mockStore({ users: [] });

      nock(API_URL)
      .get('/users/' + users[0].login)
      .replyWithError({code: 404, message: 'Not found'});

      return store.dispatch(fetchUser(users[0].login)).then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions.length).toEqual(2);
        expect(expectedActions[0].type).toEqual('FETCH_USER_PENDING');
        expect(expectedActions[1].type).toEqual('FETCH_USER_ERROR');
        expect(expectedActions[1].error).toEqual(error);
        
      });
    });
  });
});

