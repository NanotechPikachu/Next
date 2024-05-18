"use client"

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function UserProfile() {
  const [ user, setUser ] = useState(null);


  useEffect(() => {
    const checkAuth = async () => {
    try {
      const log = await axios.get(`https://dash-six-beryl.vercel.app/auth/check`, { withCredentials: true }); console.log(log);
  //    if (log?.data?.loggedIn) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`, { withCredentials: true }); console.log(response);
        setUser(response?.data);
    //  } 
    } catch (err) {
      console.error(err);
    }
    };
    checkAuth();
  }, []);
  return (
    <>
    {user ? JSON.stringify(user) : "loading"}
    </>
  )
}