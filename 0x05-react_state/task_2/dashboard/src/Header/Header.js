import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.logo)} alt='logo' />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user.isLoggedIn && (
          <p className={css(styles.loggedIn)}>
            Welcome {user.email} ({' '}
            <a href='#logout' onClick={logOut}>
              logout
            </a>{' '}
            )
          </p>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: '#283593',
    borderBottom: '3px solid #E0344B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  logo: {
    height: '100px',
  },
  title: {
    fontSize: '2.5rem',
  },
  loggedIn: {
    position: 'absolute',
    right: '20px',
    color: 'white',
    fontSize: '1.2rem',
  },
});

export default Header;
