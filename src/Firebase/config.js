import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2rDDIEeRmc_OZn_H1M8GhD970BK6lO9s",
  authDomain: "slide-a86da.firebaseapp.com",
  projectId: "slide-a86da",
  storageBucket: "slide-a86da.appspot.com",
  messagingSenderId: "306126682833",
  appId: "1:306126682833:web:e195e1b38d4f22d1d0a3f0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((res) => {
//       const token = res.user.accessToken;
//       localStorage.setItem("auth-token", token);
//       // if (token) {
//       //   navigate("/select-slide");
//       // }
//     })
//     .catch((err) => {
//       console.log("Error", err);
//     });
// };
