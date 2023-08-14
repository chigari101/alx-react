import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App', () => {
  // ... (existing tests)

  it('should have the initial state value for displayDrawer as false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).to.equal(false);
  });

  it('should update the state value for displayDrawer to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).to.equal(true);
  });

  it('should update the state value for displayDrawer to false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).to.equal(false);
  });
});
