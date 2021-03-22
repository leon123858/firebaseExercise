// const Firestore = require("@google-cloud/firestore");

// const firestore = new Firestore({
//   project_id: "exercise-c363d", //firebase名稱
//   keyFilename: "./key.json", // 放入金鑰 json
// });
import admin from 'firebase-admin';
const keyPath = './key.json'; //the code in this is the licence JSON to cloud DB
admin.initializeApp({
	credential: admin.credential.cert(keyPath),
	databaseURL: 'https://exercise-c363d.firebaseio.com',
});
const firestore = admin.firestore();

import express from 'express';
const functions = require('firebase-functions');
//import helmet from "helmet";
//import cors from "cors";

const app = express();
//app.use(helmet());
//app.use(cors());

app.post('/', (req, res) => {
	const {
		col: collection,
		doc: document,
		parameters: { thing1: thing1, thing2: thing2 },
	} = req.body;
	firestore
		.collection(collection)
		.doc(document)
		.set({ test1: thing1, test2: thing2 })
		.then(() => res.send('set data success'))
		.catch((err) => {
			res.send('set data fail');
			console.log(err);
		});
	return;
});
export default functions.region('us-central1').https.onRequest(app);
