import express from 'express';
import userController from '../controllers/userController.js';
import { upload } from '../middleware/userMulter.js';
import login_logic from '../controllers/login_logic.js';
import checkAdmin from '../middleware/userVsAdmin.js'; // Import the checkAdmin middleware
import logout_logic from '../controllers/logout_logic.js';
import getCurrentUser from '../controllers/getCurrentUser.js';

const router = express.Router();


//get current user api, change according to usecase @23pwbcs1019
router.get('/currentUser', async (req, res) => {
    console.log("inside the get current route");
    console.log('Cookies received:', req.headers.cookie);

    try{
        await getCurrentUser(req, res);
    } catch (error) {
        console.error("Error in getCurrentUser route:", error);
    }
});

// Add Login Route (POST)
router.post('/login', checkAdmin, async (req, res) => {

    await login_logic(req, res);

    console.log("req.session.user in route: ",req.session.user);
    console.log('Cookies received:', req.headers.cookie);
    console.log("req.session.authenticated: ", req.session.authenticated);
});//This way, checkAdmin runs before loginUser.

// Logout api
router.post('/logout', (req,res) => {
    console.log("req. session in logout route: ",req.session);
    console.log('Cookies received:', req.headers.cookie);

    console.log("req.session.user in logout route: ",req.session.user);

    logout_logic(req,res);

    console.log("req. session in logout route after logout: ",req.session);
});

//get all users api
router.get('/', userController.getUsers);

//get one user api
router.get('/:id', userController.getUser);

//create user api
//The upload middleware is declared as:
// router.post('/', upload, userController.createUser); // upload.fields[] already defined in userController.js 

//However, upload is a function returned by multer. You need to explicitly invoke it as middleware:
router.post('/', (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).send(err.message);
        }
        next();
    });
}, userController.createUser); //In Express, route handlers or middleware functions are passed as arguments to the route method (e.g., get, post, put). The req and res objects are automatically passed by Express when the route is triggered.
//This ensures that multer properly processes the request and files before the createUser controller runs. 

//update a user
router.put('/:id', userController.updateUser);

//delete a user
router.delete('/:id', userController.deleteUser);

// Add role-based route (admin check middleware) // middlewares dont require dedicated routes in order to run
// but should add one if we require to secure the routes on frontend
export default router;

/*
the issue i was getting while retrieving user was
I can see the issue. The problem is with your route definition and how Express handles route parameters. Let me explain the problem and provide a solution.



```javascript
import express from 'express';
import userController from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';
import login_logic from '../controllers/login_logic.js';
import checkAdmin from '../middleware/userVsAdmin.js';
import logout_logic from '../controllers/logout_logic.js';
import getCurrentUser from '../controllers/getCurrentUser.js';

const router = express.Router();

// Move the currentUser route BEFORE the :id route
router.get('/current', async (req, res) => {
    console.log("inside the get current route");
    try {
        await getCurrentUser(req, res);
    } catch (error) {
        console.error("Error in getCurrentUser route:", error);
        res.status(500).json({ message: error.message });
    }
});

// Login Route
router.post('/login', checkAdmin, async (req, res) => {
    await login_logic(req, res);
    console.log("req.session.user in route: ", req.session.user);
    console.log("req.session.authenticated: ", req.session.authenticated);
});

// Logout api
router.post('/logout', (req, res) => {
    console.log("req.session in logout route: ", req.session);
    console.log("req.session.user in logout route: ", req.session.user);
    logout_logic(req, res);
    console.log("req.session in logout route after logout: ", req.session);
});

// Generic routes should come AFTER specific routes
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).send(err.message);
        }
        next();
    });
}, userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

```

The issue is occurring because of route ordering and path matching in Express. Here's what's happening:

1. Your current route `/currentUser` comes after the `/:id` route
2. Express treats `currentUser` as an ID parameter because it matches the `/:id` pattern
3. When Mongoose tries to convert "currentUser" to an ObjectId (for the database query), it fails, hence the error you're seeing

The fixes I made in the updated code:

1. Changed the route from `/currentUser` to `/current` (more RESTful)
2. Moved the current user route BEFORE the `/:id` route
3. Added proper error handling in the route handler
4. Organized routes with specific routes first, then generic routes

To use this fixed version:

1. Replace your current routes file with the new one
2. Update your frontend/Postman requests to use `/api/users/current` instead of `/api/users/currentUser`

Additionally, make sure your session middleware is properly configured and that cookies are being sent with your requests. In Postman:

1. Enable "Send cookies" in the request settings
2. Make sure you're logged in first via the login endpoint before trying to access the current user
3. Verify that the session cookie is present in the request headers

*/