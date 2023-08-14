import React, { Component } from 'react';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import { StyleSheet, css } from 'aphrodite';
import { AppProvider, defaultLogOut } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;

    return (
      <div className={css(styles.App)}>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        <AppProvider>
          {this.state.displayDrawer && <div className={css(styles.notifications)}><p>Here is the list of notifications</p></div>}
          {this.state.displayDrawer && <div className={css(styles.close)} onClick={this.handleHideDrawer}><img src={closeIcon} alt='close icon' width='10px' /></div>}
          {this.state.displayDrawer && <button style={buttonStyle}>Close</button>}
          {this.state.displayDrawer && <p>Here is the list of notifications</p>}
          {this.state.displayDrawer && <button onClick={this.handleHideDrawer}>Close</button>}
        </AppProvider>
        {this.state.displayDrawer && <p>Here is the list of notifications</p>}
        {this.state.displayDrawer && <button onClick={this.handleHideDrawer}>Close</button>}
        {this.state.displayDrawer && <Login />}
        {this.state.displayDrawer && <button onClick={this.handleHideDrawer}>Close</button>}
        <CourseList listCourses={listCourses} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  notifications: {
    border: '1px dashed red',
    padding: '10px',
  },
  close: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const buttonStyle = {
  position: 'absolute',
  right: '30px',
  top: '10px',
};

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

export default App;
