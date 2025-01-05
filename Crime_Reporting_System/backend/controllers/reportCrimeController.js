import Crime from "../models/CrimeReport.model.js";

const getCrimes = async (req, res) => {
    try {
        const crimes = await Crime.find({});
        res.status(200).json({crimes});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

//check this , get this to forward report data. this will be used to forward a single criminals data
const getCrime = async (req, res) => {
    try{
        const id = req.params.id; //extract value from parameters as string
        const crime = await Crime.findById(id);
        res.status(200).json(crime);

        if(!user) {
            return res.status(404).json({message:"Error User not found"});
        }
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const createCrime = async (req, res) => {
    try{
        console.log('inside createcrime try block');

        const CNIC_Front_Image = req.files?.CNIC_Front_Image ? req.files.CNIC_Front_Image[0].filename : null;
        const ReporterImage = req.files?.ReporterImage ? req.files.ReporterImage[0].filename : null;
        const ProofImage = req.files?.ProofImage ? req.files.ProofImage[0].filename : null;


        const crime = await Crime.create({
            reporterName: req.body.reporterName,
            reporter_father_name: req.body.reporter_father_name,
            reporterCNIC: req.body.reporterCNIC,
            reporter_Phone: req.body.reporter_Phone,
            crime_type: req.body.crime_type,
            crime_date: req.body.crime_date,
            crime_location: req.body.crime_location,
            suspect_description: req.body.suspect_description,
            crime_description: req.body.crime_description,
            CNIC_Front_Image: CNIC_Front_Image,
            ReporterImage: ReporterImage,
            ProofImage:ProofImage
        });

        res.status(201).json({message: "Crime Reported", crime});
        
    }catch (error) {
        console.error("Error occurred while reporting crime: ", error); 
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

//no update bhai, delete and make new


const deleteCrime = async (req, res) => {
    try{
        const id = req.params.id;
        await Crime.findByIdAndDelete(id);

        res.status(200).json(`User deleted at id : ${id}`);
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

export default { getCrimes, getCrime, createCrime, deleteCrime };