import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress and restore Aphrodite style injection
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    const tr = wrapper.find("tr");
    expect(tr.children()).toHaveLength(1);

    const th = tr.find("th");
    expect(th.prop("colSpan")).toEqual(2);
    expect(th.text()).toEqual("test");
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    const tr = wrapper.find("tr");
    expect(tr.children()).toHaveLength(2);

    const td1 = tr.childAt(0);
    expect(td1.html()).toEqual("<td>test</td>");

    const td2 = tr.childAt(1);
    expect(td2.html()).toEqual("<td>test</td>");
  });
});
