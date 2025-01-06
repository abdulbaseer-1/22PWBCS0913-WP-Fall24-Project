import mongoose from 'mongoose';

const CrimeReportSchema = new mongoose.Schema(
  {
    reporterName: {
      type: String,
      required: [true, 'Please enter your name'],
      unique: false,
    },
    reporter_father_name: {
      type: String, // Corrected from `email` to `String`
      required: [true, 'Please enter your fathers name'],
      unique: false,
    },
    reporterCNIC: {
      type: String, // Corrected from `password` to `String`
      required: [true, 'Please enter your CNIC'],
      unique: true,
    },
    reporter_Phone: {
      type: String,
      required: [true, 'Please enter your phone numer'],
      unique: true,
    },
    crime_type: {
      type: String,
      required: [true, 'Please enter the crime type'],
      unique: false,
    },
    crime_date: {
      type: Date,
      required: [true, 'Please enter your crime date'],
      unique: false,
    },
    crime_location: {
      type: String, // Corrected from `phone` to `String`
      required: [true, 'Please enter your crime location'],
      unique: false,
    },
    suspect_description: {
      type: String,
      required: [true, 'Please describe your suspect'],
      unique: false,
    },
    crime_description: {
      type: String,
      required: [true, 'Please describe your crime'],
      unique: false,
    },
    CNIC_Front_Image: {
      type: String, // Assuming a file path or URL will be stored
      required: [false, 'Please provide the CNIC front image'],
    },
    ReporterImage: {
      type: String, // Assuming a file path or URL will be stored
      required: [false, 'Please provide your own image'],
    },
    ProofImage: {
      type: String, // Assuming a file path or URL will be stored
      required: [false, 'Please provide your proof'],
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const CrimeReport = mongoose.model('CrimeReport', CrimeReportSchema); // Create user model from schema // automatically pluralized by mongo for collection

export default CrimeReport;