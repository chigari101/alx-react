import React, { PureComponent } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  // ... other code ...

  render() {
    // ... render logic ...

    return (
      <React.Fragment>
        {/* ... other JSX ... */}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func.isRequired,
};

// ... styles and other code ...

export default Notifications;
