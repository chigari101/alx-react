import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import { AppContext, defaultUser } from '../App/AppContext';

describe('Footer', () => {
  it('should not display the link when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).to.have.lengthOf(0);
  });

  it('should display the link when user is logged in', () => {
    const user = { ...defaultUser, isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).to.have.lengthOf(1);
  });
});
