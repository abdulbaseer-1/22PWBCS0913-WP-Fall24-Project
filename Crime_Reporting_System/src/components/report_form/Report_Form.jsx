import styles from './Report_Form.module.css';
import React, { useState } from 'react';


function ReportACrime() {
  const [yourName, setYourName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState('');
  const [crimeType, setCrimeType] = useState('');
  const [crimeDate, setCrimeDate] = useState('');
  const [crimeLocation, setCrimeLocation] = useState('');
  const [suspectDescription, setSuspectDescription] = useState('');
  const [crimeDescription, setCrimeDescription] = useState('');
  const [cnicPicture, setCnicPicture] = useState(null);
  const [userPicture, setUserPicture] = useState(null);
  const [additionalProof, setAdditionalProof] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('yourName', yourName);
    formData.append('fathersName', fathersName);
    formData.append('cnic', cnic);
    formData.append('phone', phone);
    formData.append('crimeType', crimeType);
    formData.append('crimeDate', crimeDate);
    formData.append('crimeLocation', crimeLocation);
    formData.append('suspectDescription', suspectDescription);
    formData.append('crimeDescription', crimeDescription);
    formData.append('cnicPicture', cnicPicture);
    formData.append('userPicture', userPicture);
    formData.append('additionalProof', additionalProof);

    fetch('/api/crime-report', { method: 'POST', body: formData })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className={styles.content_area}>
        <div className={styles.crimeReportContainer}>
          <h2>Report a Crime</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inlineGroup}>
              <div className={styles.formGroup}>
                <label>Your Name:</label>
                <input type="text" id="your-name" value={yourName} onChange={(e) => setYourName(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>Father's Name:</label>
                <input type="text" id="fathers-name" value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
              </div>
            </div>
            <div className={styles.inlineGroup}>
              <div className={styles.formGroup}>
                <label>CNIC Number:</label>
                <input type="text" id="cnic" value={cnic} onChange={(e) => setCnic(e.target.value.replace(/[^0-9]/g, ''))} />
              </div>
              <div className={styles.formGroup}>
                <label>Phone:</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className={styles.inlineGroup}>
              <div className={styles.formGroup}>
                <label>Crime Type:</label>
                <select id="crime-type" value={crimeType} onChange={(e) => setCrimeType(e.target.value)}>
                  <option value="">Select Crime Type</option>
                  <option value="theft">Hit and Run</option>
                  <option value="robbery">Robbery</option>
                  <option value="assault">Assault</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Crime Date:</label>
                <input type="date" id="crime-date" value={crimeDate} onChange={(e) => setCrimeDate(e.target.value)} />
              </div>
            </div>
            <div className={styles.inlineGroup}>
              <div className={styles.formGroup}>
                <label>Crime Location:</label>
                <input type="text" id="crime-location" value={crimeLocation} onChange={(e) => setCrimeLocation(e.target.value)} />
              </div>
            </div>
            <div className={styles.inlineGroup}>
              <div className={styles.formGroup}>
                <label>Suspect Description:</label>
                <input type="text" id="suspect-description" value={suspectDescription} onChange={(e) => setSuspectDescription(e.target.value)} />
              </div>
            </div>
            <div className={styles.inlineGroup}>
              <div className={styles.formGroup}>
                <label>Your Picture:</label>
                <input type="file" id="user-picture" onChange={(e) => setUserPicture(e.target.files[0])} />
              </div>
              <div className={styles.formGroup}>
                <label>Additional Proof (Picture):</label>
                <input type="file" id="additional-proof" onChange={(e) => setAdditionalProof(e.target.files[0])} />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReportACrime;












// // Importing the CSS module for styling the component
// import styles from './Report-A-Crime.module.css'; // This is React code to import CSS for styling the component

// // Importing React and useState from React library for managing component state
// import React, { useState } from 'react'; // React library for building the UI and managing state

// // Importing components for Header, Footer, Sidebar, and Hero
// import Header from '../Header/Header'; // This is a custom React component for the page header
// import Footer from '../Footer/Footer'; // This is a custom React component for the footer
// import Sidebar from '../sidebar/Sidebar'; // This is a custom React component for the sidebar
// import Hero from '../Hero/Hero'; // This is a custom React component for the hero section of the page

// // Main functional component where the crime report form is defined
// function ReportACrime() { 
//   // React state hooks to manage form field values
//   const [cnic, setCnic] = useState(''); // State to store CNIC value, initialized to an empty string
//   const [crimeType, setCrimeType] = useState(''); // State to store selected crime type
//   const [yourName, setYourName] = useState(''); // State to store your name
//   const [fathersName, setFathersName] = useState(''); // State to store father's name
//   const [phone, setPhone] = useState(''); // State to store phone number
//   const [crimeDate, setCrimeDate] = useState(''); // State to store crime date
//   const [crimeLocation, setCrimeLocation] = useState(''); // State to store crime location
//   const [typeOfCrime, setTypeOfCrime] = useState(''); // State to store detailed crime type
//   const [suspectDescription, setSuspectDescription] = useState(''); // State to store description of the suspect
//   const [crimeDescription, setCrimeDescription] = useState(''); // State to store description of the crime
//   const [cnicPicture, setCnicPicture] = useState(null); // State to store uploaded CNIC picture
//   const [userPicture, setUserPicture] = useState(null); // State to store uploaded user's picture

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevents the default form submission (page reload)

//     // Create FormData object to send the data to the server
//     const formData = new FormData(); 
//     formData.append('cnic', cnic); // Appends CNIC to the FormData object
//     formData.append('crimeType', crimeType); // Appends crime type to the FormData object
//     formData.append('yourName', yourName); // Appends your name to the FormData object
//     formData.append('fathersName', fathersName); // Appends father's name to the FormData object
//     formData.append('phone', phone); // Appends phone number to the FormData object
//     formData.append('crimeDate', crimeDate); // Appends crime date to the FormData object
//     formData.append('crimeLocation', crimeLocation); // Appends crime location to the FormData object
//     formData.append('typeOfCrime', typeOfCrime); // Appends detailed crime type to the FormData object
//     formData.append('suspectDescription', suspectDescription); // Appends suspect description to the FormData object
//     formData.append('crimeDescription', crimeDescription); // Appends crime description to the FormData object
//     formData.append('cnicPicture', cnicPicture); // Appends uploaded CNIC picture to the FormData object
//     formData.append('userPicture', userPicture); // Appends uploaded user's picture to the FormData object

//     // Sending the form data to the server (Node.js backend) via a POST request
//     fetch('/api/crime-report', {
//       method: 'POST', // HTTP method (POST) used to send the data
//       body: formData, // The body of the request contains the FormData object
//     })
//       .then((response) => response.json()) // Handles the response from the server (expecting JSON)
//       .then((data) => console.log(data)) // Logs the response data to the console
//       .catch((error) => console.error(error)); // Catches and logs any errors that occur during the fetch request
//   };

//   return (
//     // Root element of the component
//     <div>
//       {/* A container for the crime report form */}
//       <div className={styles.content_area}> {/* CSS class to style the form container */}
//         <div className={styles.crimeReportContainer}> {/* CSS class to style the report container */}
//           <h2>Report a Crime</h2> {/* Title of the form */}
//           <form onSubmit={handleSubmit}> {/* The form element, which triggers handleSubmit on submission */}
//             {/* Form field for CNIC */}
//             <div className={styles.formGroup}> {/* CSS class for the form field group */}
//               <label>CNIC:</label> {/* Label for the CNIC input */}
//               <input
//                 type="text" // Input type is text, but we restrict it to numbers with onChange
//                 id="cnic" // Unique identifier for the input element
//                 value={cnic} // Value bound to the state (react controlled component)
//                 onChange={(e) => setCnic(e.target.value.replace(/[^0-9]/g, ''))} // Restrict input to numbers only
//                  //  prevents editing; if you want to allow input, remove this
//               />
//             </div>
//             {/* Form field for selecting the crime type */}
//             <div className={styles.formGroup}>
//               <label>Crime Type:</label>
//               <select
//                 id="crime-type" // Unique identifier for the select element
//                 value={crimeType} // Value bound to the state (react controlled component)
//                 onChange={(e) => setCrimeType(e.target.value)} // Updates the state with selected crime type
//               >
//                 <option value="">Select Crime Type</option> {/* Default option */}
//                 <option value="theft">Theft</option> {/* Option for theft */}
//                 <option value="robbery">Robbery</option> {/* Option for robbery */}
//                 <option value="assault">Assault</option> {/* Option for assault */}
//               </select>
//             </div>
//             {/* Form field for entering the user's name */}
//             <div className={styles.formGroup}>
//               <label>Your Name:</label>
//               <input
//                 type="text"
//                 id="your-name"
//                 value={yourName}
//                 onChange={(e) => setYourName(e.target.value)} // Updates state with the name entered
//                  // Disables the input field, remove if you want it to be editable
//               />
//             </div>
//             {/* Form field for entering the father's name */}
//             <div className={styles.formGroup}>
//               <label>Father's Name:</label>
//               <input
//                 type="text"
//                 id="fathers-name"
//                 value={fathersName}
//                 onChange={(e) => setFathersName(e.target.value)} // Updates state with the father's name entered
//               />
//             </div>
//             {/* Form field for entering the phone number */}
//             <div className={styles.formGroup}>
//               <label>Phone:</label>
//               <input
//                 type="text"
//                 id="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)} // Updates state with the phone number entered
//                  // Disables the input field, remove if you want it to be editable
//               />
//             </div>
//             {/* Form field for selecting the crime date */}
//             <div className={styles.formGroup}>
//               <label>Crime Date:</label>
//               <input
//                 type="date" // Type is date, so user picks a date from a calendar
//                 id="crime-date"
//                 value={crimeDate}
//                 onChange={(e) => setCrimeDate(e.target.value)} // Updates state with the selected date
//               />
//             </div>
//             {/* Form field for entering the crime location */}
//             <div className={styles.formGroup}>
//               <label>Crime Location:</label>
//               <input
//                 type="text"
//                 id="crime-location"
//                 value={crimeLocation}
//                 onChange={(e) => setCrimeLocation(e.target.value)} // Updates state with the location entered
//               />
//             </div>
//             {/* Form field for entering the type of crime */}
//             <div className={styles.formGroup}>
//               <label>Type of Crime:</label>
//               <input
//                 type="text"
//                 id="type-of-crime"
//                 value={typeOfCrime}
//                 onChange={(e) => setTypeOfCrime(e.target.value)} // Updates state with the type of crime entered
//               />
//             </div>
//             {/* Form field for describing the suspect */}
//             <div className={styles.formGroup}>
//               <label>Suspect Description:</label>
//               <input
//                 type="text"
//                 id="suspect-description"
//                 value={suspectDescription}
//                 onChange={(e) => setSuspectDescription(e.target.value)} // Updates state with the suspect description
//               />
//             </div>
//             {/* Form field for describing the crime */}
//             <div className={styles.formGroup}>
//               <label>Crime Description:</label>
//               <textarea
//                 id="crime-description"
//                 value={crimeDescription}
//                 onChange={(e) => setCrimeDescription(e.target.value)} // Updates state with the crime description entered
//               />
//             </div>
//             {/* Form field for uploading CNIC picture */}
//             <div className={styles.formGroup}>
//               <label>CNIC Picture:</label>
//               <input
//                 type="file"
//                 id="cnic-picture"
//                 onChange={(e) => setCnicPicture(e.target.files[0])} // Updates state with the uploaded CNIC file
//               />
//             </div>
//             {/* Form field for uploading user's picture */}
//             <div className={styles.formGroup}>
//               <label>Your Picture:</label>
//               <input
//                 type="file"
//                 id="user-picture"
//                 onChange={(e) => setUserPicture(e.target.files[0])} // Updates state with the uploaded user's picture
//               />
//             </div>
//             {/* Submit button */}
//             <button type="submit">Submit</button> {/* Submit button to send the form data */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Export the ReportACrime component to be used in other parts of the application
// export default ReportACrime; // This is a React export for the component




