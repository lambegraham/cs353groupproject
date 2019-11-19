//This code snippet uploads the data
const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://cs353groupproject-d4b21.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);
firestoreService.restore("data.json");