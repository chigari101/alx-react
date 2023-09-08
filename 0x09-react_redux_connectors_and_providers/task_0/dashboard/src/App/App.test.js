import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';


describe('Testing mapStateToProps', () => {
  it('test that verify that the function returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    expect(mapStateToProps(state)).toEqual(expect.objectContaining({ isLoggedIn: true }));
  });
});
