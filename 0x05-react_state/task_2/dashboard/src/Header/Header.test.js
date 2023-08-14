import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from './App';
import { AppProvider, defaultUser } from './AppContext';

describe('App', () => {
  it('should display CourseList when user is logged in', () => {
    const wrapper = mount(
      <AppProvider>
        <App />
      </AppProvider>
    );
    wrapper.setState({ displayDrawer: false });
    const instance = wrapper.instance();
    instance.setState({ user: { ...defaultUser, isLoggedIn: true } });
    wrapper.update();
    expect(wrapper.exists('CourseList')).to.equal(true);
  });

  it('should display Login when user is not logged in', () => {
    const wrapper = mount(
      <AppProvider>
        <App />
      </AppProvider>
    );
    wrapper.setState({ displayDrawer: false });
    const instance = wrapper.instance();
    instance.setState({ user: { ...defaultUser, isLoggedIn: false } });
    wrapper.update();
    expect(wrapper.exists('Login')).to.equal(true);
  });

  it('should log in and out', () => {
    const wrapper = mount(
      <AppProvider>
        <App />
      </AppProvider>
    );
    const instance = wrapper.instance();
    instance.logIn('test@example.com', 'password123');
    expect(wrapper.state('user').isLoggedIn).to.equal(true);
    instance.logOut();
    expect(wrapper.state('user').isLoggedIn).to.equal(false);
  });
});
