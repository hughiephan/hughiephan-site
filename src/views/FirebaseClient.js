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
const courseRef = ref(database, 'course');
const researchRef = ref(database, 'research');
const studentRef = ref(database, 'student');
const assignmentRef = ref(database, 'assignment');
const topicRef = ref(database, 'topic');
const domainRef = ref(database, 'domain');
const experimentRef = ref(database, 'experiment');
const mathRef = ref(database, 'math');
const referenceRef = ref(database, 'reference');
const readingRef = ref(database, 'reading');

export async function getCourse(courseId) {
    return await get(courseRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[courseId]
        } else {
            console.log("No course data found");
        }
    }).catch(function (error) {
        console.error("Error loading course data: ", error);
    });
};

export async function getAllCourse() {
    return await get(courseRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No course data found");
        }
    }).catch(function (error) {
        console.error("Error loading course data: ", error);
    });
};

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

export async function getAllResearch() {
    return await get(researchRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No research data found");
        }
    }).catch(function (error) {
        console.error("Error loading research data: ", error);
    });
};

export async function getStudent(id) {
    return await get(studentRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[id]
        } else {
            console.log("No student data found");
        }
    }).catch(function (error) {
        console.error("Error loading student data: ", error);
    });
};

export async function getAllStudent() {
    return await get(studentRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No student data found");
        }
    }).catch(function (error) {
        console.error("Error loading student data: ", error);
    });
};

export async function getAssignment(id) {
    return await get(assignmentRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[id]
        } else {
            console.log("No assignment data found");
        }
    }).catch(function (error) {
        console.error("Error loading assignment data: ", error);
    });
};

export async function getAllAssignment() {
    return await get(assignmentRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No assignment data found");
        }
    }).catch(function (error) {
        console.error("Error loading assignment data: ", error);
    });
};

export async function getAllTopic() {
    return await get(topicRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No topic data found");
        }
    }).catch(function (error) {
        console.error("Error loading topic data: ", error);
    });
};

export async function getTopic(topicId) {
    return await get(topicRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[topicId]
        } else {
            console.log("No topic data found");
        }
    }).catch(function (error) {
        console.error("Error loading topic data: ", error);
    });
};

export async function getAllDomain() {
    return await get(domainRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No domain data found");
        }
    }).catch(function (error) {
        console.error("Error loading domain data: ", error);
    });
};

export async function getDomain(domainId) {
    return await get(domainRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[domainId]
        } else {
            console.log("No domain data found");
        }
    }).catch(function (error) {
        console.error("Error loading domain data: ", error);
    });
};

export async function getAllExperiment() {
    return await get(experimentRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No experiment data found");
        }
    }).catch(function (error) {
        console.error("Error loading experiment data: ", error);
    });
};

export async function getExperiment(experimentId) {
    return await get(experimentRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[experimentId]
        } else {
            console.log("No experiment data found");
        }
    }).catch(function (error) {
        console.error("Error loading experiment data: ", error);
    });
};

export async function getAllMath() {
    return await get(mathRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No math data found");
        }
    }).catch(function (error) {
        console.error("Error loading math data: ", error);
    });
};

export async function getReference(referenceId) {
    return await get(referenceRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data[referenceId]
        } else {
            console.log("No reference data found");
        }
    }).catch(function (error) {
        console.error("Error loading reference data: ", error);
    });
};

export async function getAllReading() {
    return await get(readingRef).then(function (snapshot) {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data
        } else {
            console.log("No reading data found");
        }
    }).catch(function (error) {
        console.error("Error loading reading data: ", error);
    });
};