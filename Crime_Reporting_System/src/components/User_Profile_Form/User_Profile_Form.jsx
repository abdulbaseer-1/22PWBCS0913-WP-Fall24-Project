import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from "../Hero/Hero";
import Sidebar from '../sidebar/Sidebar'; 
import ContentBody from '../content_body/ContentBody';
import styles from './User_Profile_Form.module.css';
import React, { useState } from 'react';

function User_Profile_Form() {

  const [yourName, setYourName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cnicPicture, setCnicPicture] = useState(null);
  const [userPicture, setUserPicture] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = new FormData();

    userData.append('yourName', yourName);
    userData.append('fathersName', fathersName);
    userData.append('cnic', cnic);
    userData.append('phone', phone);
    userData.append('address', address);  // Don't forget to add the address to formData
    userData.append('cnicPicture', cnicPicture);
    userData.append('userPicture', userPicture);

    fetch('/api/crime-report', { method: 'POST', body: userData })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className={styles.content_area}>
        <div className={styles.crimeReportContainer}>
          <h2>User Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Your Name:</label>
              <input type="text" id="your-name" value={yourName} onChange={(e) => setYourName(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>Father's Name:</label>
              <input type="text" id="fathers-name" value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>CNIC Number:</label>
              <input type="text" id="cnic" value={cnic} onChange={(e) => setCnic(e.target.value.replace(/[^0-9]/g, ''))} maxLength={14} />
            </div>

            <div className={styles.formGroup}>
              <label>Phone:</label>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))} maxLength={11} />
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
