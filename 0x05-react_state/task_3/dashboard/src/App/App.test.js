import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from './App';
import { AppProvider, defaultUser } from './AppContext';

describe('App', () => {
  it('should mark a notification as read', () => {
    const wrapper = mount(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const instance = wrapper.instance();
    const notificationId = 1; // Change this to an actual notification id

    const initialNotifications = [...instance.state.listNotifications];
    instance.markNotificationAsRead(notificationId);

    expect(instance.state.listNotifications).to.have.lengthOf(initialNotifications.length - 1);
    expect(instance.state.listNotifications.some(notification => notification.id === notificationId)).to.equal(false);
  });

  // ... other tests ...
});
