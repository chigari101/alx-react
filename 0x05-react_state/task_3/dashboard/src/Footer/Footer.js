import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer>
      {user.isLoggedIn && <p>Contact us at contact@example.com</p>}
    </footer>
  );
};

export default Footer;
