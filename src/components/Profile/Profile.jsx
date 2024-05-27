import React from 'react';
import { Helmet } from 'react-helmet';

export default function Profile({ userData }) {
  const { first_name, last_name, age, email } = userData || {}; 

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <link rel="shortcut icon" href="/images.png" type="image/x-icon" />
      </Helmet>

      <div className="profile-container">
        <h2 className="profile-title">User Profile</h2>
        <div className="profile-details">
          <p><strong>Name:</strong> {first_name} {last_name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>
    </>
  );
}
