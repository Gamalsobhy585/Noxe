import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  console.log(props);
  if (!localStorage.getItem('loggedInUser')) {
    return <Navigate to='/login' />;
  } else {
    return props.children;
  }
}
