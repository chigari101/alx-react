import React, { createContext, useState } from 'react';

// Default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logOut function
export const defaultLogOut = () => {};

// Create a context
export const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

// AppContext provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  // LogIn function
  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  // LogOut function
  const logOut = () => {
    setUser(defaultUser);
  };

  return (
    <AppContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AppContext.Provider>
  );
};
