import { initializeApp } from "firebase/app";
import { getDatabase, get, ref } from "firebase/database"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC3wEhSRAdPHaBbqve2YUTsW7zys63Dy6E",
    authDomain: "quizfan-c8a21.firebaseapp.com",
    databaseURL: "https://quizfan-c8a21-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quizfan-c8a21",
    storageBucket: "quizfan-c8a21.appspot.com",
    messagingSenderId: "53254171522",
    appId: "1:53254171522:web:3ebbf0062b66605e07bd9b",
    measurementId: "G-NFZ9MW8MR0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const lessonRef = ref(database, 'lesson');
const tutorialRef = ref(database, 'tutorial');
const questionRef = ref(database, 'question');

export async function getLesson(lessonId) {
    return await get(lessonRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[lessonId]
        } else {
            console.log("No lesson data found");
        }
    }).catch(function (error) {
        console.error("Error loading lesson data: ", error);
    });
};

export async function getAllLesson() {
    return await get(lessonRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No lesson data found");
        }
    }).catch(function (error) {
        console.error("Error loading lesson data: ", error);
    });
};

export async function getTutorial(tutorialId) {
    return await get(tutorialRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[tutorialId]
        } else {
            console.log("No tutorial data found");
        }
    }).catch(function (error) {
        console.error("Error loading tutorial data: ", error);
    });
};

export async function getAllTutorial() {
    return await get(tutorialRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No tutorial data found");
        }
    }).catch(function (error) {
        console.error("Error loading tutorial data: ", error);
    });
};

export async function getAllQuestion() {
    return await get(questionRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No question data found");
        }
    }).catch(function (error) {
        console.error("Error loading question data: ", error);
    });
};

