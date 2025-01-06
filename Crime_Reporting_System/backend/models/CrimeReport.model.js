import React, { useState, useEffect } from 'react';
import styles from './Report_View.module.css';
import CriminalImage from './Student-1.jpeg';

const CriminalProfile = () => {
  // State for criminal data
  const [report, setReport] = useState({
    reporterName: "",
    reporter_father_name: "",
    reporterCNIC: "",
    reporter_Phone: "",
    crime_type: "",
    crime_date: "",
    crime_location: "",
    suspect_description: "",
    crime_description: "",
    CNIC_Front_Image: "",
    ReporterImage: CriminalImage,
    ProofImage: ""
  });

  // useEffect to simulate fetching data from an API
  useEffect(() => {
    // Simulate an API call to get the report data
    const fetchReport = async () => {
      const fetchedData = {
        reporterName: "Abdul Baseer",
        reporter_father_name: "Muhammad Ali",
        reporterCNIC: "12345-6789012-3",
        reporter_Phone: "1234567890",
        crime_type: "Robbery",
        crime_date: "2025-01-01",
        crime_location: "Downtown",
        suspect_description: "Tall male, wearing black jacket",
        crime_description: "A notorious criminal with multiple offenses.",
        CNIC_Front_Image: "./CNIC.jpg",
        ReporterImage: CriminalImage,
        ProofImage: "./proof.jpg"
      };
      setReport(fetchedData);
    };

    fetchReport();
  }, []); // Empty array means this runs only on component mount

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Crime Report</h1>
      <div className={styles.profile}>
        <img src={report.ReporterImage} alt="Reporter" className={styles.image} />
        <div className={styles.details}>
          <p><strong>Reporter Name:</strong> {report.reporterName}</p>
          <p><strong>Father's Name:</strong> {report.reporter_father_name}</p>
          <p><strong>CNIC:</strong> {report.reporterCNIC}</p>
          <p><strong>Phone Number:</strong> {report.reporter_Phone}</p>
          <p><strong>Crime Type:</strong> {report.crime_type}</p>
          <p><strong>Crime Date:</strong> {new Date(report.crime_date).toDateString()}</p>
          <p><strong>Crime Location:</strong> {report.crime_location}</p>
          <p><strong>Suspect Description:</strong> {report.suspect_description}</p>
          <p><strong>Crime Description:</strong> {report.crime_description}</p>
          {report.CNIC_Front_Image && (
            <img src={report.CNIC_Front_Image} alt="CNIC Front" className={styles.image} />
          )}
          {report.ProofImage && (
            <img src={report.ProofImage} alt="Proof" className={styles.image} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CriminalProfile;
