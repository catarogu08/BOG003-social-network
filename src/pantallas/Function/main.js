// Este es el punto de entrada de tu app
//import { myFunction } from "./lib/index.js";
//myFunction();


/*import { registerUser } from "../../lib/views/templateRegister.js";
import { userExist } from '../../lib/views/templateLogin.js';
import { home } from "../../lib/views/templateHome.js";

const newResult = registerUser();
document.getElementById('root').appendChild(newResult)
const resultExist = userExist();
document.getElementById('root').appendChild(resultExist);
const ourHome = home();
document.getElementById('root').appendChild(ourHome);*/

import { showRoute } from "../../router.js";
window.addEventListener("load", () => {
    showRoute(window.location.hash)
   });

   window.addEventListener("hashchange", () => {
    showRoute(window.location.hash)
   });



  /* const arrayShow = document.querySelector("#root")
   const showDisplays = (arrayShow) =>{
    document.querySelector("#root").appendChild(arraymostrar);

    window.addEventListener("load", (showDisplays(arraymostrar)));
   }*/
