import * as Firebase from 'firebase/app'
import 'firebase/firestore'

function initFirebase () {
  Firebase.initializeApp({
    apiKey: "AIzaSyD-EwhsI3PWpY_Wv8Bmstg6IwDxAzqT2i0",
    authDomain: "quizlet-19763.firebaseapp.com",
    databaseURL: "https://quizlet-19763.firebaseio.com",
    projectId: "quizlet-19763",
    storageBucket: "quizlet-19763.appspot.com",
    messagingSenderId: "98294419779",
    appId: "1:98294419779:web:375a552c2f43224d6f1ff6"
  });
  return new Promise((resolve, reject) => {
    Firebase.firestore().enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === 'failed-precondition') {
          reject(err);
          // Multiple tabs open, persistence can only be
          // enabled in one tab at a a time.
        } else if (err.code === 'unimplemented') {
          reject(err);
          // The current browser does not support all of
          // the features required to enable persistence
        }
      });
  });
}

export { Firebase, initFirebase }