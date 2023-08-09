
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7prR-LFCv5AB9RUj1eQ-sIlVnnVprBh8",
  authDomain: "foodratinginwebiz.firebaseapp.com",
  projectId: "foodratinginwebiz",
  storageBucket: "foodratinginwebiz.appspot.com",
  messagingSenderId: "857523007353",
  appId: "1:857523007353:web:80a8e5c33e7c32b827c9a8",
  measurementId: "G-DY3PH3FYML"
};
const firebaseApp = getApp(useRouter().query.__firebaseAppName);
  const enterName = document.querySelector("#enterName")
  const enterComment = document.querySelector("#enterMessage")
  function Namedata() {
    set(ref(db, "People/" + enterName.value),  {
      Name: enterName.value,
    })
    .then(()=>{
      alert("Comment added Successfully!")
    })
    .catch(()=>{
      alert(error)
    });
  }
  console.log('2222')

  function MessageData() {
    console.log('faqiuuu')
    set(ref(db, "Comments/" + enterName.value), {
      Comment: enterComment.value,
    })
      .then(() => {
        alert("Comment added Successfully!");
      })
      .catch((error) => {
        alert(error);
      });
      console.log('enterName')
      console.log(enterName)
      console.log(enterComment)
      console.log()
  }
  const insertButton = document.getElementById('insertBtn');
  insertButton.addEventListener('onClick', Namedata);
  insertButton.addEventListener('onClick', MessageData);
console.log(insertButton)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// pages/index.js
function HomePage() {
  return <div>Welcome to Next.js!</div>;
  console.log(HomePage)
}

export default HomePage;
