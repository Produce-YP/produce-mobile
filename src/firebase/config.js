import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfOFkav37xw6stD1g6W8BYlT6vJTsWPFA',
  authDomain: 'produce-305317.firebaseapp.com',
  databaseURL: 'https://produce-305317.firebaseio.com',
  projectId: 'produce-305317',
  storageBucket: 'produce-305317.appspot.com',
  messagingSenderId: '306689905963',
  appId: '1:306689905963:ios:bed2d8a792e6a12e42216e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
