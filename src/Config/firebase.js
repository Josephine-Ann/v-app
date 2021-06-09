import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAitGBXCe3OiTvKFSaR13ke5V8jbfBO9lo",
    authDomain: "v-app-c22a0.firebaseapp.com",
    projectId: "v-app-c22a0",
    storageBucket: "v-app-c22a0.appspot.com",
    messagingSenderId: "1028443151163",
    appId: "1:1028443151163:web:e5e85daaefde4326ccb51e",
    measurementId: "G-D3X9VSW9B5"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase