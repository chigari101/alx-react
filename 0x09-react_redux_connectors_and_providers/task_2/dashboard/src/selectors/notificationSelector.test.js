import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import { Map } from 'immutable';

describe('Test notification Selectors functions', () => {
  it('Veriy that "filterTypeSelected" returns only filter attribute from state', () => {
    const state = notificationReducer();
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('DEFAULT');
  });

  it('Veriy that "getNotifications" returns only notifications attribute from state', () => {
    const state = notificationReducer();
    const notifications = getNotifications(state);
    expect(notifications).toEqual(Map([]));
  });

  it('Veriy that "getUnreadNotifications" returns only unread notifications attribute from state', () => {
    const previousState = Map({
      filter: 'DEFAULT',
      notifications: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: true
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        3: {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      }
    });

    const expected = Map({
      2: {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: false
      },
      3: {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false
      }
    });

    const newState = notificationReducer(previousState);
    const unreadNotifications = getUnreadNotifications(newState);
    expect(unreadNotifications).toEqual(expected);
  });
});
