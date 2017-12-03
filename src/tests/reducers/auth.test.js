import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    user: {
      uid: 'abc123'
    }
  };
  const state = authReducer({}, action);
  expect(state.user.uid).toBe(action.user.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ user : {uid: 'anything'}}, action);
  expect(state).toEqual({});
});