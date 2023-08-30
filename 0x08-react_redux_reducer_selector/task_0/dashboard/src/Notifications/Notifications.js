import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer && (
          <div className={css(styles.notifications)}>
            <button className={css(styles.closeButton)} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            <p className={css(styles.notificationText)}>
              {this.props.listNotifications.length === 0 ? "No new notification for now" : "Here is the list of notifications"}
            </p>
            <ul className={css(styles.notificationList)}>
              {this.props.listNotifications.map((val) => (
                <NotificationItem
                  key={val.id}
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  menuItem: {
    textAlign: "right",
  },
  notifications: {
    position: "absolute",
    top: "1.8em",
    right: "0",
    padding: "1em",
    border: "2px dashed red",
    "@media (max-width: 375px)": {
      display: "block",
      height: "100vh",
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      fontSize: "20px",
      padding: "0",
    },
  },
  closeButton: {
    color: "#3a3a3a",
    fontWeight: "bold",
    background: "none",
    border: "none",
    fontSize: "15px",
    position: "absolute",
    right: "3px",
    top: "3px",
    cursor: "pointer",
    outline: "none",
  },
  notificationText: {
    margin: "0",
    textAlign: "center",
  },
  notificationList: {
    listStyle: "none",
    padding: "0",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
