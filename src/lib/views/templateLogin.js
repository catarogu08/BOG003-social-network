export const userExist = () => {
  const divUser = document.createElement("div");

  const viewUser = `
  <div class="secondPage" id="classPage">
  <h1 class="title">LOVE.CAR</h1>
  <a href="#/register"> 
  <button id="cuentaNoExistente"> No tengo cuenta</button>
  </a>
  <h2>Cuenta Gmail:</h2>
  <input type="text" id="yourEmail">
  <h2>Contraseña:</h2>
  <input type="password" id="yourPass">
  <button id="enter">Login</button>
  <button>Login con Gmail</button>
  </div>`

  divUser.innerHTML = viewUser;

  //login cuenta existente
  const count = divUser.querySelector("#enter");
  count.addEventListener("click", (e) => {
    const enterEmail = document.getElementById("yourEmail").value;
    const enterPass = document.getElementById("yourPass").value;

    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPass)
      .then((userCredential) => {
       const user = userCredential.user;
       window.location.hash = "#/home"
      })
      .catch((error) => {
        console.log("cuenta no registrada")
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  })

  const buttonNoExist = divUser.querySelector("#cuentaNoExistente")
  buttonNoExist.addEventListener("cilck", (e) =>{
    window.location.hash = "#/registro";
  })
  return divUser; 

  
};





