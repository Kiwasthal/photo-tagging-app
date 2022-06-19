import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBL1h7Pt9tul6df14YWHoEAmyMnJLMLosg',
  authDomain: 'photo-tagging-app-b3072.firebaseapp.com',
  projectId: 'photo-tagging-app-b3072',
  storageBucket: 'photo-tagging-app-b3072.appspot.com',
  messagingSenderId: '787154880379',
  appId: '1:787154880379:web:9e122a573e957ef8d21fde',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
