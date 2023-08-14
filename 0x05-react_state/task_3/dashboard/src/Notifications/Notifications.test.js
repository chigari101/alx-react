import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { AppProvider, defaultUser } from '../App/AppContext';

describe('Notifications', () => {
  // ... other tests ...

  it('should mark a notification as read when clicked', () => {
    const markNotificationAsRead = sinon.spy();
    const wrapper = mount(
      <AppProvider>
        <Notifications
          displayDrawer={false}
          handleDisplayDrawer={() => {}}
          handleHideDrawer={() => {}}
          listNotifications={[{ id: 1, type: 'default', value: 'Test notification' }]}
          markNotificationAsRead={markNotificationAsRead}
        />
      </AppProvider>
    );

    const notificationItem = wrapper.find(NotificationItem);
    expect(notificationItem).to.have.lengthOf(1);

    notificationItem.simulate('click');
    expect(markNotificationAsRead.calledOnce).to.equal(true);
    expect(markNotificationAsRead.calledWith(1)).to.equal(true);
  });

  // ... other tests ...
});
