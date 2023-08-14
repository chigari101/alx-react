import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Notifications from './Notifications';

describe('Notifications', () => {
  // ... (existing tests)

  it('should call handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = sinon.spy();
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer.calledOnce).to.equal(true);
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = sinon.spy();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(handleHideDrawer.calledOnce).to.equal(true);
  });
});
