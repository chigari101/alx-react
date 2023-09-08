import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import configureStore from 'redux-mock-store'
import { initialState } from '../reducers/uiReducer';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Test App.js', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><App /></Provider>);
  });

  it('should render App without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('should contain Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('should contain Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('should not display CourseList inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe('Testing mapStateToProps', () => {
  it('should verify that the function returns the correct object', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    expect(mapStateToProps(state)).toEqual(expect.objectContaining({ isLoggedIn: true }));
  });
});
