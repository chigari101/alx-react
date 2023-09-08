import { getAllNotificationsByUser, normalizedNotifications } from './notifications';

describe('Tests notifications schema', () => {
  it('Testing getAllNotificationsByUser method', () => {
    const id = '5debd764a7c57c7839d722e9';
    const result = getAllNotificationsByUser(id);
    const expected_output = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
      }
    ];

    expect(result).toEqual(expect.arrayContaining(expected_output));
  });

  it('Tests normalized notifications data - result array', () => {
    const expected_result = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      // ... (other expected results)
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ];

    expect(normalizedNotifications.result).toEqual(expect.arrayContaining(expected_result));
  });

  it('Tests normalized notifications data - users entity', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expected = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      // ... (other expected properties)
      picture: "http://placehold.it/32x32"
    };

    expect(normalizedNotifications.entities.users[userId]).toEqual(expected);
  });

  it('Tests normalized notifications data - messages entity', () => {
    const guid = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    const expected = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      // ... (other expected properties)
      value: "Cursus risus at ultrices mi."
    };

    expect(normalizedNotifications.entities.messages[guid]).toEqual(expected);
  });

  it('Tests normalized notifications data - notifications entity', () => {
    const id = '5debd7642e815cd350407777';
    const expected = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      // ... (other expected properties)
    };

    expect(normalizedNotifications.entities.notifications[id]).toEqual(expected);
  });
});
