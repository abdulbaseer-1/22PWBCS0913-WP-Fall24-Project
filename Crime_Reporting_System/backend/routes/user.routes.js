import express from 'express';
import userController from '../controllers/userController.js';
import {upload} from '../middleware/multer.js';

const router = express.Router();

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
router.put('/:id',userController. updateUser);


//delete a user
router.delete('/:id', userController.deleteUser);

export default router;