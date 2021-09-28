//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  const register = document.getElementById("logIn");
    

   register.addEventListener('click', (e) =>{
    const createPassword = document.getElementById("password").value;
    const createEmail = document.getElementById("email").value;
    const user = document.getElementById("yourName").value;
    const auth = getAuth(createEmail, createPassword, user)
    createUserWithEmailAndPassword(auth, email, user, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

     
});
