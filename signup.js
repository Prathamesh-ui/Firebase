import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

document.getElementById("loginForm").addEventListener("submit", (event)=>{
    event.preventDefault();
});

document.getElementById("signUp").addEventListener('click',()=>{

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    document.getElementById("error").innerHTML = "Account Created! Please Login";   
    signOut(auth);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("error").innerHTML = errorMessage;
    
    // ..
  });
})

document.getElementById("google").addEventListener("click",()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
     document.location.replace("welcome.html");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})