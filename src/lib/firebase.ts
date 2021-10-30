// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB9D_aOxb-pwG_ZkqVuN8xVoCfT3pvYdgg',
	authDomain: 'shindig-80c51.firebaseapp.com',
	projectId: 'shindig-80c51',
	storageBucket: 'shindig-80c51.appspot.com',
	messagingSenderId: '534058391168',
	appId: '1:534058391168:web:56bfb293703d7b1bcdf865',
	measurementId: 'G-EW5G74TNZF'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
