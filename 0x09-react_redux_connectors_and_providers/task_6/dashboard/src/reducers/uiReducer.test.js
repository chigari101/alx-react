import { uiReducer, initialState } from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('Testing uiReducer', () => {
  it('should verify that the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const res = uiReducer();
    expect(res.toJS()).toStrictEqual(initialState.toJS());
  });

  it('should verify that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const res = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(res.toJS()).toStrictEqual(initialState.toJS());
  });

  it('should verify that the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes the isNotificationDrawerVisible property correctly', () => {
    const res = uiReducer(undefined, { type: actions.DISPLAY_NOTIFICATION_DRAWER });
    expect(res.toJS()).toStrictEqual({ ...initialState.toJS(), isNotificationDrawerVisible: true });
  });

  it('should verify that the state returned by the uiReducer function, when the action LOGIN is passed, changes the user property correctly', () => {
    const res = uiReducer(undefined, { type: actions.LOGIN, user: { email: 'test' } });
    expect(res.toJS()).toStrictEqual({ ...initialState.toJS(), user: { email: 'test' } });
  });

  it('should verify that the state returned by the uiReducer function, when the action LOGOUT is passed, changes the isUserLoggedIn and user properties correctly', () => {
    const res = uiReducer(undefined, { type: actions.LOGOUT });
    expect(res.toJS()).toStrictEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
      user: null
    });
  });
});
