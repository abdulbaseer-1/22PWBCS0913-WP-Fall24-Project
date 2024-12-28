import express from 'express';
import userController from '../controllers/userController.js';
import {upload} from '../controllers/userController.js';
const router = express.Router();

//get all users api
router.get('/', userController.getUsers);
//get one user api
router.get('/:id', userController.getUser);

//create user api
router.post('/', upload, userController.createUser); // upload.fields[] already defined in userController.js
 

//update a user
router.put('/:id',userController. updateUser);


//delete a user
router.delete('/:id', userController.deleteUser);

export default router;