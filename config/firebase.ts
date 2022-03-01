import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

import "firebase/compat/auth";
import Constants from "expo-constants";

interface Config {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: Config = {
  apiKey: Constants.manifest!.extra!.apiKey,
  authDomain: Constants.manifest!.extra!.authDomain,
  projectId: Constants.manifest!.extra!.projectId,
  storageBucket: Constants.manifest!.extra!.storageBucket,
  messagingSenderId: Constants.manifest!.extra!.messagingSenderId,
  appId: Constants.manifest!.extra!.appId,
  measurementId: Constants.manifest!.extra!.measurementId,
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = getFirestore(app);
export const auth = firebase.auth();
export default db;
