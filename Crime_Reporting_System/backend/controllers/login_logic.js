// import User from "../models/User.model.js"; // User model
// import Admin from "../models/admin.model.js";
// import { compare } from 'bcrypt'; // For comparing hashed passwords
// import session from "express-session";
// // Login function to handle user authentication
// const loginUser = async (req, res) => {
//     try {
//         // Extracting username and password from the request body
//         const { username, password } = req.body;

//         //check if sesion is lready logged in
//         if(username && password) {
//             if(req.session.authenticated) {
//                 return res.status(200).json({message:"user already logged in", session: req.session});
//             }
//         }

//         // Step 1: Check if the user exists in the database
//         const user = await User.findOne({ username: username }); // Find user by username

//         // If the user is not found, return an error message
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Step 2: If user exists, compare the entered password with the stored hashed password
//         //! was not working b/c the stored password in db was not encrypted, it was plain text
//         const isPasswordValid = await compare(password, user.password);

//         // If the password does not match, return an error message
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//          //Use check admin before login, check the route to see how the middleware is used for some functionality

//         // session management logic here
//         req.session.authenticated =true;
//         req.session.user = {username};

//         // After successful login, send user data along with role determined by the checkAdmin middleware
//         return res.status(200).json({
//             message: `Login successful ${req.role} okay`,
//             user: { 
//                 username: user.username, 
//                 name: user.name,
//                 role: req.role // Role is set by the middleware // where is the pogram geting this from ? from the req obj,set by the middleware
//             }
//         });

//     } catch (error) {
//         return res.status(500).json({ message: 'Server error ', error });
//     }
// };

// export default loginUser;

import User from "../models/User.model.js";
import Admin from "../models/admin.model.js";
import { compare } from 'bcrypt';

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check existing session
        if (req.session.authenticated) {
            return res.status(200).json({
                message: "User already logged in",
                user: {
                    username: req.username,
                    name: req.passwod,
                    role: req.role
                }
            });
        }

        // Find user
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate password
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Set session data
        req.session.authenticated = true;
        req.session.user = { username: user.username };

        // Force save the session
        await new Promise((resolve, reject) => {
            req.session.save((err) => {
                if (err) {
                    console.error('Session save error:', err);
                    reject(err);
                }
                resolve();
            });
        });

        // Log session details for debugging
        console.log('Session after save:', {
            id: req.session.id,
            cookie: req.session.cookie,
            user: req.session.user
        });

        // Send response with session info
        res.status(200).json({
            message: `Login successful ${req.role}`,
            user: {
                username: user.username,
                password: user.password,//name: user.name,
                role: req.role
            },
            sessionId: req.session.id // Include this for debugging
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default loginUser;