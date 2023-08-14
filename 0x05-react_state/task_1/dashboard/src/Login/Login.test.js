import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Login from './Login';

describe('Login', () => {
  it('should have initial values for email, password, isLoggedIn, and enableSubmit', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state('email')).to.equal('');
    expect(wrapper.state('password')).to.equal('');
    expect(wrapper.state('isLoggedIn')).to.equal(false);
    expect(wrapper.state('enableSubmit')).to.equal(false);
  });

  it('should enable the submit button only when both email and password are not empty', () => {
    const wrapper = mount(<Login />);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });
    expect(submitButton.prop('disabled')).to.equal(false);

    passwordInput.simulate('change', { target: { value: '' } });
    expect(submitButton.prop('disabled')).to.equal(true);
  });

  it('should call handleLoginSubmit when the form is submitted', () => {
    const handleLoginSubmit = sinon.spy();
    const wrapper = mount(<Login />);
    wrapper.instance().handleLoginSubmit = handleLoginSubmit;
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    expect(handleLoginSubmit.calledOnce).to.equal(true);
  });
});
