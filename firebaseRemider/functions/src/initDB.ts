import admin = require('firebase-admin');

const keyPath = './key.json'; //the code in this is the licence JSON to cloud DB
admin.initializeApp({
    credential: admin.credential.cert(keyPath),
});

export default admin.firestore();