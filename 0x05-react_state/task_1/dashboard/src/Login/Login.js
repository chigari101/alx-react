import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      enableSubmit: event.target.value !== '' && this.state.password !== '',
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
      enableSubmit: this.state.email !== '' && event.target.value !== '',
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles['App-body'])}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor='email'>Email:</label>
            <input
              className={css(styles.input)}
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor='password'>Password:</label>
            <input
              className={css(styles.input)}
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input type='submit' value='OK' disabled={!this.state.enableSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  'App-body': {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  input: {
    margin: '10px',
  },
});

export default Login;
