import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Function to get notifications by user
export function getAllNotificationsByUser(userId) {
  const selectedNots = notifications.default.filter((notif) => notif.author.id === userId);
  return selectedNots.map((notif) => notif.context);
}

// Define schema entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize notifications using the schema
export const normalizedNotifications = normalize(notifications.default, [notification]);
