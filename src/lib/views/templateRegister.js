export const registerUser = () => {
  const divRegister = document.createElement("div");

  const viewRegister = `
    <div class="firstPage" id="firstPage">
    <h1 class="title">LOVE.CAR</h1>
    <button id="enterAccount">Ya tengo cuenta¡</button>
    <h2>Correo:</h2>
    <input type="text" id="email">
    <h2>Nombre:</h2>
    <input type="text" id="yourName"></input>
    <h2>Contraseña:</h2>
    <input type="password" id="password">
    <button id="logIn">Registrarme</button>
    <button id="logInGmail">Entrar con Google</button>
    </div>`

  divRegister.innerHTML = viewRegister;

  //register
  const register = divRegister.querySelector("#logIn");
  register.addEventListener('click', (e) => {
    const createPassword = document.getElementById("password").value;
    const createEmail = document.getElementById("email").value;
    const userName = document.getElementById("yourName").value;

    firebase.auth().createUserWithEmailAndPassword(createEmail, createPassword)
      .then((userCredential) => {
        window.alert(`Bienvenido :) es hora de disfrutar`);
        window.location.hash = "#/home";
      })
      .catch((error) => {
        window.alert("registro incorrecto");
      });
  });



  const googleLog = divRegister.querySelector("#logInGmail");

  googleLog.addEventListener("click", (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    firebase.auth().useDeviceLanguage();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        window.location.hass = "/#home";
      }).catch((error) => {
        window.alert("correo ya en uso ")
      });
  })

  const buttonExist = divRegister.querySelector("#enterAccount");
  buttonExist.addEventListener("click", (e) =>{
    window.location.hash = "#/login";
  })


  return divRegister;



};

