import { shallow, mount } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Notifications />", () => {
  let listNotifications;
  let latestNotification;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: latestNotification } },
    ];
  });

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div#menuItem");
    expect(item).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div#Notifications");
    expect(item).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div#menuItem");
    expect(item).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div#Notifications");
    expect(item).toHaveLength(1);
  });

  describe("Notifications with listNotifications", () => {
    it("renders Notification Items with correct html", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists()).toEqual(true);
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(3);

      expect(listItems.at(0).props().type).toEqual("default");
      expect(listItems.at(0).text()).toEqual("New course available");

      expect(listItems.at(1).props().type).toEqual("urgent");
      expect(listItems.at(1).text()).toEqual("New resume available");

      expect(listItems.at(2).props().type).toEqual("urgent");
      expect(listItems.at(2).text()).toEqual(
        "Urgent requirement - complete by EOD"
      );
    });
  });

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = [];
    });

    it("renders Notification Item correctly with empty listNotifications", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists()).toEqual(true);
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(1);

      expect(listItems.props().type).toEqual("default");
      expect(listItems.text()).toEqual("No new notification for now");
    });

    it("renders Notification Item correctly without listNotifications", () => {
      const wrapper = mount(<Notifications displayDrawer />);
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toHaveLength(1);

      expect(listItems.props().type).toEqual("default");
      expect(listItems.text()).toEqual("No new notification for now");
    });

    it("calls markAsRead and console.log with the right message", () => {
      const wrapper = shallow(<Notifications displayDrawer />);

      console.log = jest.fn();

      const instance = wrapper.instance();
      const id = 5;
      instance.markAsRead(id);

      expect(console.log).toHaveBeenCalledWith(
        `Notification ${id} has been marked as read`
      );
    });

    it("does not rerender with the same listNotifications", () => {
      const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ];

      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );

      const shouldComponentUpdate = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );

      wrapper.setProps({ listNotifications: listNotifications });

      expect(shouldComponentUpdate).toHaveBeenCalled();
      expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    });

    it("does rerender with a longer listNotifications", () => {
      const listNotifications2 = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];

      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );

      const shouldComponentUpdate = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );

      wrapper.setProps({ listNotifications: listNotifications2 });

      expect(shouldComponentUpdate).toHaveBeenCalled();
      expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    });

    it("calls handleDisplayDrawer on menu item click", () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      );

      wrapper.find("#menuItem").simulate("click");

      expect(handleDisplayDrawer).toHaveBeenCalled();
      expect(handleHideDrawer).not.toHaveBeenCalled();
    });

    it("calls handleHideDrawer on button click", () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications
          displayDrawer
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      );

      wrapper.find("#closeNotifications").simulate("click");

      expect(handleDisplayDrawer).not.toHaveBeenCalled();
      expect(handleHideDrawer).toHaveBeenCalled();
    });
  });
});
