//var express = require('express');
import express = require('express');
import * as functions from 'firebase-functions';
const app = express();


import dbSave from './db/OnSave';
import dbFind from './db/OnFind';

// app route directly
app.get('/save', dbSave);

app.get('/find', dbFind);


// set up api version 1 to firebase
export const reminder = functions.region('us-central1').https.onRequest(app);
