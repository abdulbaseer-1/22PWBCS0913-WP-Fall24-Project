import express from 'express';
import reportCrimeController from '../controllers/reportCrimeController.js';
import { upload } from '../middleware/reportMulter.js';
import getCrimesTabular from '../controllers/getReportTabular.js';

const reportRouter = express.Router();

//get all crime reports api
reportRouter.get('/', reportCrimeController.getCrimes);

//get reports tabular
reportRouter.get('/reportsTabular', async (req, res) => {
    console.log("inside reports tabular");

    await getCrimesTabular(req, res);

    console.log("crime reports in route: ", res.json());
});

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