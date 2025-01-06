import React from 'react';
import styles from './criminal_profileview.module.css';
import CriminalImage from './Student-1.jpeg'

const CriminalProfile = () => {
  // Static criminal data
  const criminal = {
    name: "Abdul Baseer",
    crime: "Robbery",
    felonRepeated: true,
    feloniesCount: 3,
    description: "A notorious criminal with multiple offenses.",
    image: CriminalImage 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Criminal Profile</h1>
      <div className={styles.profile}>
        <img src={criminal.image} alt="Criminal" className={styles.image} />
        <div className={styles.details}>
          <p><strong>Name:</strong> {criminal.name}</p>
          <p><strong>Crime:</strong> {criminal.crime}</p>
          <p><strong>Felon Repeated:</strong> {criminal.felonRepeated ? 'Yes' : 'No'}</p>
          <p><strong>Felonies Count:</strong> {criminal.feloniesCount}</p>
          <p><strong>Description:</strong> {criminal.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CriminalProfile;
