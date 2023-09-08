import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import closeIcon from '../assets/close-icon.png';
import * as notifActions from '../actions/notificationActionCreators';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

class Notifications extends React.PureComponent {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      listNotifications,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
        {!displayDrawer ? (
          <div className={css(notificationStyles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        ) : (
          <div className={css(notificationStyles.notifications)}>
            <button
              style={closeButtonStyle}
              aria-label="Close"
              className={css(notificationStyles.button)}
              onClick={(e) => {
                console.log('Close button has been clicked');
                handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(notificationStyles.ul)}>
              {Object.values(listNotifications).length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {Object.values(listNotifications).map((val, idx) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.guid}
                  markAsRead={markNotificationAsRead}
                  id={val.guid}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const closeButtonStyle = {
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
};

const notificationStyles = StyleSheet.create({
  notifications: {
    border: '3px dotted var(--holberton-red)',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    },
  },
  menuItem: {
    position: 'relative',
    zIndex: 100,
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnim, bounceAnim],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
  button: {
    '@media (max-width: 900px)': {
      position: 'relative',
      float: 'right',
    },
  },
});

const opacityAnim = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceAnim = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)' },
  '66%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleHideDrawer: () => {},
  handleDisplayDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleHideDrawer: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  return {
    listNotifications: state.notifications.get('messages'),
    ...ownProps,
  };
}

export default connect(mapStateToProps, { fetchNotifications: notifActions.fetchNotifications })(Notifications);
