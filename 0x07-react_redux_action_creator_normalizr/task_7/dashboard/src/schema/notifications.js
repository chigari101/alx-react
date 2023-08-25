import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedNotifications = normalize(notifications.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const notificationsData = normalizedNotifications.entities.notifications;
  const messagesData = normalizedNotifications.entities.messages;
  const selectedNotifs = [];

  for (const property in notificationsData) {
    if (notificationsData[property].author === userId) {
      selectedNotifs.push(messagesData[notificationsData[property].context]);
    }
  }

  return selectedNotifs;
}
