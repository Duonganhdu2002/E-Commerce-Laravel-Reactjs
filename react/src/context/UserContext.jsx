import React, { createContext, useState } from 'react';

const UserContext = createContext({ name: '', auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', auth: false });

  const login = (name) => {
    setUser({
      name: name,
      auth: true,
    });
  };

  const logout = () => {
    setUser({
      name: '',
      auth: false,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
