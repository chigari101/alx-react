import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

export const initialNotificationState = {
  notifications: [],
  filter: 'DEFAULT',
};

const notificationReducer = (state = initialNotificationState, action) => {
  switch (action.type) {
    /*
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    */

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          const updatedNotification = {
            ...notification,
          };
          if (notification.id === action.index) {
            updatedNotification.isRead = true;
          }

          return updatedNotification;
        }),
      };

    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;
