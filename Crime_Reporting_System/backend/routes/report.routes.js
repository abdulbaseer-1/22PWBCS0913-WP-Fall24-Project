import express from 'express';
import reportCrimeController from '../controllers/reportCrimeController.js';
import { upload } from '../middleware/reportMulter.js';

const reportRouter = express.Router();

//get all crime reports api
reportRouter.get('/', reportCrimeController.getCrimes);

//create crime report api
reportRouter.post('/', (req, res, next) => {
    console.log("inside create crime report route");

    upload(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).send(err.message);
        }
        next();
    });
}, reportCrimeController.createCrime);

//get one crime report api
reportRouter.get('/:id', reportCrimeController.getCrime);

//delete a crime report
reportRouter.delete('/:id', reportCrimeController.deleteCrime);

export default reportRouter;