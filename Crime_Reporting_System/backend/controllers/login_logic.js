import User from "../models/User.model.js"; // User model
import { compare } from 'bcrypt'; // For comparing hashed passwords

// Login function to handle user authentication
const loginUser = async (req, res) => {
    try {
        // Extracting email and password from the request body
        const { email, password } = req.body;

        // Step 1: Check if the user exists in the database
        const user = await User.findOne({ email: email }); // Find user by email

        // If the user is not found, return an error message
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Step 2: If user exists, compare the entered password with the stored hashed password
        const isPasswordValid = await compare(password, user.password);

        // If the password does not match, return an error message
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // After successful login, send user data along with role determined by the checkAdmin middleware
        return res.status(200).json({
            message: 'Login successful',
            user: { 
                email: user.email, 
                name: user.name, 
                role: req.role // Role is set by the middleware
            }
        });

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

export default { loginUser };
