const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
	project_id: 'exercise-c363d', //firebase名稱
	keyFilename: './key.json', // 放入金鑰 json
});
import express from 'express';
const functions = require('firebase-functions');
//import helmet from "helmet";
//import cors from "cors";
//import { geoCalculation, shippingFeeCalculation } from "../utils/delivery";

//get a list of quotes for the client to determine total
const app = express();
//app.use(helmet());
//app.use(cors());
// app.use(firebaseAuthMiddleware(admin));

app.get('/', (req, res) => {
	firestore
		.collection('test')
		.doc('test')
		.get()
		.then((item) => res.json(item.data()));

	return;
});
export default functions.region('us-central1').https.onRequest(app);
