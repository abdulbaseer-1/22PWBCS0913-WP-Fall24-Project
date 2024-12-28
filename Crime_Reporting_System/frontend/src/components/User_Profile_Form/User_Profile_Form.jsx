import styles from './User_Profile_Form.module.css';
import React, { useState } from 'react';
import useUser from '../contexts/userContext';
import axios from 'axios';

function User_Profile_Form() {
  const [Name, setName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cnicPicture, setCnicPicture] = useState(null);
  const [userPicture, setUserPicture] = useState(null);
  const { signupDetails } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = new FormData();
    console.log(signupDetails);

    if (!signupDetails) { 
      console.error("signupDetails is not available");
      return;
    }

    // Append all necessary fields to the FormData object
    userData.append('username', signupDetails.username);
    userData.append('email', signupDetails.email);
    userData.append('password', signupDetails.password);
    userData.append('Name', Name);
    userData.append('fathersName', fathersName);
    userData.append('cnic', cnic);
    userData.append('phone', phone);
    userData.append('address', address);
    userData.append('cnicPicture', cnicPicture);
    userData.append('userPicture', userPicture);

    // Log form data for debugging
    for (let [key, value] of userData.entries()) {
      console.log(key + ": " + value);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className={styles.content_area}>
        <div className={styles.crimeReportContainer}>
          <h2>User Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Your Name:</label>
              <input type="text" id="your-name" value={Name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>Father's Name:</label>
              <input type="text" id="fathers-name" value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>CNIC Number:</label>
              <input
                type="text"
                id="cnic"
                value={cnic}
                onChange={(e) => setCnic(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={14}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={11}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Address:</label>
              <textarea id="address" cols={30} rows={5} value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>CNIC Picture:</label>
              <input type="file" id="cnic-picture" onChange={(e) => setCnicPicture(e.target.files[0])} />
            </div>

            <div className={styles.formGroup}>
              <label>Your Picture:</label>
              <input type="file" id="user-picture" onChange={(e) => setUserPicture(e.target.files[0])} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User_Profile_Form;
