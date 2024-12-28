import User from "../models/User.model.js";
import multer from "multer";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';



const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, resolve(__dirname, '../../database/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
    }
});

export const upload = multer({
    storage,
    limits: { fileSize: 15 * 1024 * 1024 }, // Max file size (15mb)
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
        }
        cb(null, true);
    }
}).fields([
    { name: 'CNIC_Front_Image', maxCount: 1 },
    { name: 'userImage', maxCount: 1 }
]);

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({users});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const getUser = async (req, res) => {
    try{
        const id = req.params.id; //extract value from parameters as string
        const user = await User.findById(id);
        res.status(200).json(user);

        if(!user) {
            return res.status(404).json({message:"Error User not found"});
        }
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const createUser = async (req, res) => {
    try{
        const CNIC_Front_Image = req.files?.CNIC_Front_Image ? req.files.CNIC_Front_Image[0].filename : null;
        const userImage = req.files?.userImage ? req.files.userImage[0].filename : null;

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            fathers_name: req.body.fathers_name,
            CNIC: req.body.CNIC,
            phone: req.body.phone,
            address: req.body.address,
            CNIC_Front_Image: CNIC_Front_Image,
            userImage: userImage,
        });

        res.status(201).json({message: "user created", user});
        
    }catch (error) {
        console.log("got here");
        console.log('Uploads directory exists:', existsSync(resolve(__dirname, '../../database/uploads')));

        console.log('Request files:', req.files);
        console.log('Request body:', req.body);

        console.error("Error occurred while creating user: ", error); 
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user) {
            return res.status(404).json({message:"Error User not found"});
        }

        res.status(200).json({message: "user updated", user});
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const deleteUser = async (req, res) => {
    try{
        const id = req.params.id; 
        await User.findByIdAndDelete(id);

        res.status(200).json(`User deleted at id : ${id}`);
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };