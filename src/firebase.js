const register = document.getElementById("logIn");


register.addEventListener('click', (e) => {
  const createPassword = document.getElementById("password").value;
  const createEmail = document.getElementById("email").value;
  const user = document.getElementById("yourName").value;

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

const count = document.getElementById(enter);

count.addEventListener("click", (e) =>{
    const enterEmail = document.getElementById("yourEmail").value;
    const enterPass = document.getElementById("yourPass").value;

    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

})