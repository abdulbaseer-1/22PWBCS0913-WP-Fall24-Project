import Admin from '../models/admin.model.js';  

import User from '../models/User.model.js'; // Assuming User model already exists

const checkAdmin = async (req, res, next) => {
    try {
        const { cnic } = req.body; // Assuming CNIC is sent in the request body
        const admin = await Admin.findOne({ cnic }); // Check if the CNIC exists in the admin collection

        if (admin) {
            req.role = 'admin';  // Mark role as admin
        } else {
            req.role = 'user';   // If not found, mark as normal user
        }

        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export default checkAdmin;
