"use client"
import React, { useEffect, useState } from 'react';
import UserContext from './userContext';
import { toast } from 'react-toastify';
import { current } from '@/services/userService';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await current();
        console.log(currentUser);
        setUser(currentUser);
      } catch (error) {
        console.log(error);
        toast.error('Error While Fetching User');
        setUser(null);
      }
    }
    fetchUser();

  },[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
