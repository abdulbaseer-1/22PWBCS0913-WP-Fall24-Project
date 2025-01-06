import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './user_profileview.module.css';
import userImage from './Student-2.jpeg'; // You can use this default image

const UserProfile = () => {
  const [user, setUser] = useState(null); // Initially null, as we're fetching data
  const [error, setError] = useState(null); // For handling any errors

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Correct the URL to match the backend route
        const response = await axios.get('https://localhost:5000/api/currentUser');
        console.log("User data fetched from backend:", response.data);
        setUser(response.data);  
      } catch (err) {
        setError('Error fetching user data');
        console.error("Error fetching user data:", err);  
      }
    };
  
    fetchUserData();
  }, []);  // Empty array ensures this runs only once when the component mounts
  
  if (error) {
    return <div>{error}</div>;  
  }

  if (!user) {
    return <div>Loading...</div>;  // Show loading state while the data is being fetched
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>User Profile</h1>
      <div className={styles.profile}>
        <img src={user.image || userImage} alt="User" className={styles.image} />
        <div className={styles.details}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
