import express from 'express';
import userController from '../controllers/userController.js';
import login_logic from '../controllers/login_logic.js';
import { upload } from '../controllers/userController.js';
import checkAdmin from '../middlewares/userVsAdmin.js'; // Import the checkAdmin middleware

const router = express.Router();

//get all users api
router.get('/', userController.getUsers);

//get one user api
router.get('/:id', userController.getUser);

//create user api
router.post('/', upload, userController.createUser); // upload.fields[] already defined in userController.js

//update a user
router.put('/:id', userController.updateUser);

//delete a user
router.delete('/:id', userController.deleteUser);

// Add Login Route (POST)
router.post('/login', login_logic.loginUser); // Login user (use loginUser function from login_logic.js)

// Add role-based route (admin check middleware)
router.post('/role-check', checkAdmin, (req, res) => {
    if (req.role === 'admin') {
        res.json({ message: 'Admin access granted' });
    } else {
        res.json({ message: 'Normal user access granted' });
    }
});

export default router;
