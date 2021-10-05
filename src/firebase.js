const register = document.getElementById("logIn");


register.addEventListener('click', (e) => {
  const createPassword = document.getElementById("password").value;
  const createEmail = document.getElementById("email").value;
  const userName = document.getElementById("yourName").value;

  firebase.auth().createUserWithEmailAndPassword(createEmail, createPassword)
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


//login cuenta existente
const count = document.getElementById("enter");

count.addEventListener("click", (e) =>{
    const enterEmail = document.getElementById("yourEmail").value;
    const enterPass = document.getElementById("yourPass").value;

    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPass)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})

//Login Google
const googleLog = document.getElementById("logIn-Gmail");

googleLog.addEventListener("click", (e) =>{
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
})
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });