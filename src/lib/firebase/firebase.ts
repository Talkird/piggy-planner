import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCP46l0B2GGhDFOeZXLOKkdyC955rKwg2E',
	authDomain: 'piggy-planner-19025.firebaseapp.com',
	projectId: 'piggy-planner-19025',
	storageBucket: 'piggy-planner-19025.firebasestorage.app',
	messagingSenderId: '43288761289',
	appId: '1:43288761289:web:78d39a20e92abbb07b8e18'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
