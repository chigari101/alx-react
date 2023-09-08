import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import configureStore from 'redux-mock-store'
import { initialState } from '../reducers/uiReducer';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Testing <Header /> Component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render an h1 tag", () => {
    expect(wrapper.find('h1')).toBeDefined();
  });

  it("should render an img tag", () => {
    expect(wrapper.find('img')).toBeDefined();
  });
});
