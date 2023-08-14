import React, { PureComponent } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  // ... (existing code)

  render() {
    return (
      <div className={css(styles.Notifications)}>
        <button
          style={{
            color: '#3a3a3a',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            position: 'absolute',
            right: '3px',
            top: '3px',
            cursor: 'pointer',
            outline: 'none',
          }}
          aria-label='Close'
          onClick={this.props.handleHideDrawer} // Call handleHideDrawer on button click
        >
          <img src={closeIcon} alt='close icon' width='10px' />
        </button>
        {this.props.listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
        <ul className={css(styles.ul)}>
          {this.props.listNotifications.length === 0 ? (
            <NotificationItem type='default' value='No new notification for now' />
          ) : null}
          {this.props.listNotifications.map((val) => (
            <NotificationItem
              type={val.type}
              value={val.value}
              html={val.html}
              key={val.id}
              markAsRead={this.props.markNotificationAsRead}
              id={val.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
